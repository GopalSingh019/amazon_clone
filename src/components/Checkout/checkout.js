import React, { useState } from 'react';
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import AddressForm from './AddressForm';
import { useSelector } from 'react-redux';


function checkout() {
  const [openAdd,setOpenAdd]=useState(false);
  const [address,setAddress]=useState('Bali bhusan singh Near Hanuman mandir,hariyazam colony,jamtara road, Hariyazam colony, NIRSA, JHARKHAND, 828205, India, Phone number: 7488157068');
  const items=useSelector(store=>store.Items.items);
  console.log(items);
  const closeModal=()=>setOpenAdd(false);
  
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
            <div className='payment__Header'><h3>PAYMENT OPTIONS</h3></div>
            <div className='payment__Container'></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout