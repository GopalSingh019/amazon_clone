import React from 'react';
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';

function checkout() {
  return (
    <div>
        <header className='checkout__Header'><h2>Checkout</h2></header>
        <main className='checkout__Container'>
          <div className='container'>
            <div>
            <div className='summary__header'>
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className='summary__container'>
              <CheckoutProduct></CheckoutProduct>
            </div>
            </div>
            <div>
              <div className='payment__Header'><h3>PAYMENT OPTIONS</h3></div>
              <div className='payment__Container'></div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default checkout