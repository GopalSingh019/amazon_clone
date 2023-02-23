import React, { useEffect, useState } from 'react';
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import AddressForm from './AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LoadingButton from '@mui/lab/LoadingButton';
import { fetchAddress } from '../../Store/addressReducer';

const stripePromise = loadStripe('pk_test_51MZVocSDW6rpkpt9ETLUszQpj6b7z4qzoybS7LCFzTb3xabWMke6a95hzmpvj5ZINU8bEMjsRZJ5U7LgHslqxRhL00y8mnSKc7');

function checkout() {
  const [openAdd, setOpenAdd] = useState(false);
  const [payment, setPayment] = useState('primary');
  const [loading, setLoading] = useState('');
  const dispatch = useDispatch();
  // const [address,setAddress]=useState('this');


  const items = useSelector(store => store.Items.container);
  const address = useSelector(store => store?.Address?.container);


  const closeModal = () => setOpenAdd(false);
  useEffect(() => {
    dispatch(fetchAddress());
  }, [openAdd]);

  const stripe = useStripe();
  const elements = useElements();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51MZVocSDW6rpkpt9kw7ioajBEKwNGGf09ysfCLZyKmKKvEFmgBjjEWH6NnR2fpVdh69fIeTq6LFGyilIugiaYxXD00qjtC5SCG}}',
  };

  const handlePaySubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    
    setLoading('true');
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/",
      },
    });
    setLoading('');
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
      setPayment('error');
    }else{
      setPayment('success');
    }
  }

  return (
    <div>
      <header className='checkout__Header'><h2>Checkout</h2></header>
      <main className='checkout__Container'>
        <div className='container__billing'>
          {/* form for address */}
          <AddressForm open={openAdd} close={closeModal} address={address} />
          <div>
            <div className='summary__header'>
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className='list__container'>
              <p className='summary__addrDetail'>{address ? `Delivery Address - ${address?.fullname}, ${address?.flat}, ${address?.landmark}, ${address?.area}, ${address?.country} - ${address?.pin}. ${address?.mob}` : 'Please add an address for delivery.'}</p>
              {address ? <button className='addr_btn' onClick={() => setOpenAdd(true)}>Edit Address</button> : <button className='addr_btn' onClick={() => setOpenAdd(true)}>Add Address</button>}
            </div>
            <div className='list__container'>
              <h2>Items</h2>
              {items.map((item) => {
                if (item.selected.booleanValue)
                  return <CheckoutProduct>{item}</CheckoutProduct>
              }
              )}
            </div>
          </div>
          <div className='list__container'>

            <div className='payment__Header'><h3>PAYMENT OPTIONS</h3></div>
            {address ? <form className='payment__form' onSubmit={handlePaySubmit}><label>Enter Card Details</label><CardElement /><LoadingButton variant="contained" type='submit' loading={loading} color={payment}>Submit</LoadingButton ></form> : null}
            <div className='payment__Container'></div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout