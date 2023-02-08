import React from 'react';


function CheckoutProduct(props) {
  return (
    <section className='productf__container'>
      <img src={props.children.thumbnail} />
      <ul>
        <li><h2>{props.children.title}</h2></li>
        <li><p>{props.children.description}</p></li>
        <li><h1>${props.children.price}</h1></li>
        <li><p>Qty - {props.children.qty}</p></li>
      </ul>
      <hr></hr>
    </section>
  )
}

export default CheckoutProduct