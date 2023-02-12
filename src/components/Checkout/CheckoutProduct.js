import React from 'react';


function CheckoutProduct(props) {
  return (
    <section className='productf__container'>
      <img src={props.children.thumbnail.stringValue} />
      <ul>
        <li><h2>{props.children.title.stringValue}</h2></li>
        <li><p>{props.children.description.stringValue}</p></li>
        <li><h1>${props.children.price.integerValue}</h1></li>
        <li><p>Qty - {props.children.qty.integerValue}</p></li>
      </ul>
      <hr></hr>
    </section>
  )
}

export default CheckoutProduct