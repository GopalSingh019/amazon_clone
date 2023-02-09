import React, { useState } from 'react';
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import AddressForm from './AddressForm';
import { useSelector } from 'react-redux';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';

const stripePromise=loadStripe('pk_test_51MZVocSDW6rpkpt9ETLUszQpj6b7z4qzoybS7LCFzTb3xabWMke6a95hzmpvj5ZINU8bEMjsRZJ5U7LgHslqxRhL00y8mnSKc7')

function checkout() {
  const [openAdd,setOpenAdd]=useState(false);
  const [address,setAddress]=useState('this');
  const items=useSelector(store=>store.Items.items);
  console.log(items);
  const closeModal=()=>setOpenAdd(false);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51MZVocSDW6rpkpt9kw7ioajBEKwNGGf09ysfCLZyKmKKvEFmgBjjEWH6NnR2fpVdh69fIeTq6LFGyilIugiaYxXD00qjtC5SCG}}',
  };

  const handlePaySubmit=(e)=>{
    e.preventDefault();
    console.log('submitted');
  }
  
  return (
    <div>
      <header className='checkout__Header'><h2>Checkout</h2></header>
      <main className='checkout__Container'>
        <div className='container__billing'>
          {/* form for address */}
          <AddressForm open={openAdd} close={closeModal}/>
          <div>
            <div className='summary__header'>
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className='list__container'>
              <p className='summary__addrDetail'>{address ? `Delivery Address - ${address}`:'Please add an address for delivery.'}</p>
              {address ? <button className='addr_btn' onClick={()=>setOpenAdd(true)}>Edit Address</button>:<button className='addr_btn' onClick={()=>setOpenAdd(true)}>Add Address</button>}
            </div>
            <div className='list__container'>
              <h2>Items</h2>
              {items.map((item)=>{if(item.selected)
              return <CheckoutProduct>{item}</CheckoutProduct>}
              )}
            </div>
          </div>
          <div className='list__container'>
            <Elements stripe={stripePromise} >
            <div className='payment__Header'><h3>PAYMENT OPTIONS</h3></div>
            {address ? <form className='payment__form' onSubmit={handlePaySubmit}><label>Enter Card Details</label><CardElement/><Button variant="contained" type='submit'>Submit</Button></form>:null}
            <div className='payment__Container'></div>
            </Elements>
          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout