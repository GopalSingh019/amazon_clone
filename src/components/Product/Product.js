import React from 'react';
import './product.css';

function Product({title,price,rating,img,}) {
  return (
    <article className='product__container'>
        <h5>{title}</h5>
        <h3>${price}</h3>
        <>🌟🌟🌟🌟</>
        <div className='product__img'><img src="https://i0.wp.com/navidkp.com/wp-content/uploads/2020/09/AtomicHabits_Cover_Image.png?fit=400%2C600&ssl=1"></img></div>
        <div className='product__Btn'><div className='product__addBtn'>Add To Cart</div></div>
    </article>
  )
}

export default Product