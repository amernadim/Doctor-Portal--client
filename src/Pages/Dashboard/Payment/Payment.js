import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

// stripe
const stripePromise = loadStripe('pk_test_51M6QudL64DhoRs6IF8JhngpTUKeXFHh2b3keox62rlC7oWM93UlJNVxHRgqSobhyBKMAHxl6cWOrzbvsrO7yDjYD00LWe4vMNx')

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  if(navigation.state === "loading"){
      return <Loading></Loading>
  }
  return (
      <div>
          <h3 className="text-3xl">Payment for {treatment}</h3>
          <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

          <div className='w-96 my-12'>
              <Elements stripe={stripePromise}>
                  <CheckoutForm
                      booking={booking}
                  />
              </Elements>
          </div>

      </div>
  );
};

export default Payment;