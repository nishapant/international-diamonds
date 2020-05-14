import React, {useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Typography, Input, Modal, Button, Spin, Form } from 'antd';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [billingDetails, setBillingDetails ]= useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleSubmit = async (event) => {
    // Block native form submission.
    console.log(billingDetails.name);
    console.log(billingDetails.address);
    console.log(billingDetails.email);
    console.log(billingDetails.phone);
    console.log(billingDetails.state);
    console.log(billingDetails.postalCode);


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Name" >
            <Input 
                id="name"
                name="name"
                placeholder="Jane Doe"
                value= {billingDetails.name}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, name: e.target.value});
                }}
                type="text"
            />
        </Form.Item>
                                    
        <Form.Item label="Address" >
            <Input 
                id="address"
                name="address"
                placeholder="123 Main Street"
                type="text"
                value= {billingDetails.address}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, address: e.target.value});
                }}
            />
        </Form.Item>
                                
        <Form.Item label="City" >
            <Input 
                id="city"
                name="city"
                placeholder="New York City"
                type="text"
                value= {billingDetails.city}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, city: e.target.value});
                }}
            />
        </Form.Item>

        <Form.Item label="State">
            <Input 
                id="state"
                name="state"
                placeholder="New York"
                type="text"
                value= {billingDetails.state}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, state: e.target.value});
                }}
            />
        </Form.Item>

        <Form.Item label="Postal Code">
            <Input 
                id="postalCode"
                name="postalCode"
                placeholder="10030"
                type="text"
                value= {billingDetails.postalCode}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, postalCode: e.target.value});
                }}
            />
        </Form.Item>

        <Form.Item label="Phone Number" >
            <Input 
                id="phone"
                name="phone"
                placeholder="(123) 456 - 7890"
                type="text"
                value= {billingDetails.phone}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, phone: e.target.value});
                }}
            />
        </Form.Item>

        <Form.Item label="Email Address">
            <Input 
                id="email"
                name="email"
                placeholder="janedoe@gmail.com"
                type="email"
                value= {billingDetails.email}
                onChange={(e) => {
                    setBillingDetails({...billingDetails, email: e.target.value});
                }}
            />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
        {/* <CardElement />

        <button type="submit" disabled={!stripe}>
          Pay
        </button> */}
      </Form>
    </div>
    
  );
};

export default CheckoutForm;