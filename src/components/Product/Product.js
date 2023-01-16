import React from 'react';
import './product.css';
import {useDispatch} from 'react-redux';
import {setCartItems} from '../../Store/cartReducer';

function Product(props) {
  const dispatch=useDispatch();
  let rate='';
  for(let i=0;i<parseInt(props.rating);i++){
    rate=rate+'🌟';
  }
  const onAddToCart=()=>{
    let cartProduct=JSON.parse(localStorage.getItem("cart")) || [];
    cartProduct.push({...props.children,selected:true,qty:1});
    localStorage.setItem("cart",JSON.stringify(cartProduct));
    dispatch(setCartItems());
    //to show snackbar
    props.setAddSuccessFun(true);
  }
  return (
    <article className='product__container'>
        <h4>{props.title}</h4>
        <h3>${props.price}</h3>
        <>{rate}</>
        <div className='product__imgContainer'><div className='product__img'><img src={props.img} alt="Product"/></div></div>
        <div className='product__Btn' ><div className='product__addBtn' onClick={onAddToCart}>Add To Cart</div></div>
    </article>
  )
}

export default Product