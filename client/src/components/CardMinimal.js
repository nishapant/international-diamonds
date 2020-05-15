import React, { useEffect, useState } from 'react';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import '../style/2-Card-Detailed.css';
import Strapi from 'strapi-sdk-javascript/build/main';
import { getCart, calculatePrice, clearCart, calculateAmount } from '../utils';

const apiUrl = process.env.API_URL || 'http://localhost:1337/';
const strapi = new Strapi(apiUrl);


const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const CardField = ({onChange}) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({processing, error, children, disabled}) => (
  <button
    className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);

const ErrorMessage = ({children}) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);


class CheckoutForm extends React.Component {
  state = {
    cartItems: [],
    email: '',
    name: '',
    phone: '',
    city: '',
    country: '',
    line1: '',
    postal_code: '',
    state: '',
    error: null,
    cardComplete: false,
    processing: false,
    paymentMethod: null,

  }
  async componentDidMount() {
    this.setState({ cartItems: getCart()});
    // window
    //   .fetch("/create-payment-intent", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
    //   })
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     console.log(data.clientSecret);
    //   });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { cartItems, email, name, phone, city, country, line1, postal_code, state, error, cardComplete, processing, paymentMethod } = this.state;
    const amount = calculateAmount(cartItems);

    const { stripe, elements, clientSecret } = this.props;
    console.log(clientSecret);

    if (!stripe || !elements) {
      return;
    }
    
    if (error) {
      this.props.elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      this.setState({ processing: true });

    }

    let token;
    try {
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: name,
              email: email,
              phone: phone,
              address: {
                city: city,
                country: country,
                line1: line1,
                postal_code: postal_code,
                state: state
              },
            }
          }
        });

        if(payload.error) {
          this.setState({ processing: false });
          this.setState({ error: payload.error });
          return;
        }
      
        await strapi.createEntry('orders', {
          items: cartItems,
          email: email,
          amount: amount,
          phoneNumber: phone,
          country: country,
          postalCode: postal_code,
          state: state,
          city: city,
          address: line1,
          name: name,
        });
        this.setState({ processing: false });
        clearCart();
        console.log('Your order has been successfully submitted!');
        console.log(payload);
    } catch (err) {
      this.setState({ processing: false });
      this.setState({ error: err });
      console.log(err);
    }

  };

  render() {
    const { cartItems, email, name, phone, city, country, line1, postal_code, state, error, cardComplete, processing, paymentMethod } = this.state;

    return paymentMethod ? (
      <div className="Result">
        <div className="ResultTitle" role="alert">
          Payment successful
        </div>
        <div className="ResultMessage">
          Thanks for trying Stripe Elements. No money was charged, but we
          generated a PaymentMethod: {paymentMethod.id}
        </div>
      </div>
    ) : (
      <form className="Form" onSubmit={this.handleSubmit}>
        <fieldset className="FormGroup">
          <Field
            label="Name"
            id="name"
            type="text"
            placeholder="Jane Doe"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <Field
            label="Address"
            id="line1"
            type="text"
            placeholder="123 Main Street"
            required
            autoComplete="address"
            value={line1}
            onChange={(e) => {
              this.setState({ line1: e.target.value });
            }}
          />
          <Field
            label="City"
            id="city"
            type="text"
            placeholder="New York City"
            required
            autoComplete="city"
            value={city}
            onChange={(e) => {
              this.setState({ city: e.target.value });
            }}
          />
          <Field
            label="State"
            id="state"
            type="text"
            placeholder="New York"
            required
            autoComplete="state"
            value={state}
            onChange={(e) => {
              this.setState({ state: e.target.value });
            }}
          />
          <Field
            label="Postal Code"
            id="postalCode"
            type="text"
            placeholder="10013"
            required
            autoComplete="postalCode"
            value={postal_code}
            onChange={(e) => {
              this.setState({ postal_code: e.target.value });
            }}
          />
          <Field
            label="Country"
            id="country"
            type="text"
            placeholder="United States"
            required
            autoComplete="country"
            value={country}
            onChange={(e) => {
              this.setState({ country: e.target.value });
            }}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <Field
            label="Phone"
            id="phone"
            type="tel"
            placeholder="(941) 555-0123"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              this.setState({ phone: e.target.value });
            }}
          />
        </fieldset>
        <fieldset className="FormGroup">
          <CardField
            onChange={(e) => {
              this.setState({ error: e.error, cardComplete: e.complete });
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SubmitButton processing={processing} error={error} disabled={!this.props.stripe}>
          Pay $25
        </SubmitButton>
      </form>
    )
  }
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

export default function InjectedCheckoutForm() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret);
      });
  }, []);

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} clientSecret={clientSecret} />
      )}
    </ElementsConsumer>
  );
}