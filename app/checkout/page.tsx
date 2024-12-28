'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import {useStripe, useElements} from '@stripe/react-stripe-js';



// https://docs.stripe.com/testing
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);


function CheckoutPage() {

  const searchParams = useSearchParams();

  const orderId = searchParams.get('orderId');
  const cartId = searchParams.get('cartId');

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post('/api/payment', {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id='checkout'>
      <div>
        <p>example card visa</p>
        <p>number: 4242424242424242</p>
        <p>cvc: any 3 digits</p>
        <p>date: any future date</p>
      </div>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options} 
>
        <EmbeddedCheckout 
        />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
export default CheckoutPage;
