import React, { Component } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm2';
import App from './CardMinimal'
// import App from './2-Split-Card';


const stripePromise = loadStripe('pk_test_1wnyBxAYIl0XrWg7nOfLLVv900hS1OkZ8Z');

class Checkout extends Component {
  render() {
    return (
      <div>
        {/* <Elements stripe={stripePromise}>
            <CheckoutForm />
         </Elements> */}
        <App />
      </div>
      // <App />
    );
  }
}

export default Checkout;
