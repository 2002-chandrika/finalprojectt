'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51OFa8mLyPuxrVtxVxj4uYM8JVPorLKehNtolkNf38r2CJS99FWfRz7IF9o3EWE6E5B1YuybNl0bB1RAhzR230FOi00S1TL9GlV');

const StripePayment = ({ item, session }) => {
    const [clientSecretData,seclientSecretData]=useState(null)
    useEffect(() => {
        // axios.post('https://finalprojectt-205i.onrender.com/createPaymentIntent', https://finalprojectt-205i.onrender.com/createPaymentIntent
        axios.post('https://finalprojectt-205i.onrender.com/createPaymentIntent', { price: item?.price })
            .then((res) => {
                seclientSecretData(res.data.clientSecret)
            })
    }, [item?.price])
  return (
    <>
      <Elements stripe={stripePromise}>
                <CheckoutForm item={item} session={session} clientSecretData={clientSecretData}/>
            </Elements>
    </>
  )
}

export default StripePayment
