import React, { Component } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CardMinimal';


const stripePromise = loadStripe('pk_test_1wnyBxAYIl0XrWg7nOfLLVv900hS1OkZ8Z');

class Checkout extends Component {
  render() {
    return (
      <Elements stripe={stripePromise}>
          <CheckoutForm />
      </Elements>
      // <App />
    );
  }
}

export default Checkout;
