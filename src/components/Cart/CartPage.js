import React from 'react';
import './cartPage.css';

function CartPage() {
  return (
    <div className='cart__container'>
    <section className='cart__main'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg" />
      <h1>Your Shopping Basket</h1>
      <hr></hr>
      <article className='cart__product'>
        <img></img>
        <div>

        </div>
      </article>
    </section>
    <aside className='card__aside'>
      The Total will go here
    </aside>
    </div>
  )
}

export default CartPage