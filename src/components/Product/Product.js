import React from 'react';
import './product.css';

function Product({title,price,rating,img}) {
  let rate='';
  for(let i=0;i<rating;i++){
    rate=rate+'🌟';
  }
  return (
    <article className='product__container'>
        <h4>{title}</h4>
        <h3>${price}</h3>
        <>{rate}</>
        <div className='product__img'><img src={img}></img></div>
        <div className='product__Btn'><div className='product__addBtn'>Add To Cart</div></div>
    </article>
  )
}

export default Product