
import React, { useState } from 'react';
import './cartPage.css';
import CartProduct from './cartProduct/cartProduct';

function CartPage() {
  const [itemTotal, setItemTotal] = useState(() => { return 0; })
  return (
    <div className='cart__container'>

      <section className='cart__main'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg" />
        <h1>Shopping Cart</h1>
        <h4><a className='cart__Link'>Deselect all items</a></h4>
        <h4>No items selected. <a className='cart__Link'>Select all items</a></h4>

        <hr></hr>

        {/* cartProduct portion  and separator*/}
        <CartProduct />
        <hr></hr>
        <CartProduct />
        <hr></hr>

        {/* subtotal portion */}
        <div className='cart__subtotal'><h1>Subtotal(1 items): $266.00</h1></div>

      </section>

      {/* proceed to checkout portion */}
      <aside className='card__aside'>
        <div className='cart__total'>
          <h1>{`Subtotal(${itemTotal} items):$ `}</h1>
          <h1 className='cart__total'>940.00</h1>
        </div>
        <div className='cart__buyBtn'>Proceed to Buy</div>
      </aside>
    </div>
  )
}

export default CartPage