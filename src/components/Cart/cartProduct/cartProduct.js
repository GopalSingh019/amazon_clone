import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function cartProduct() {
    return (
        <div>
            <article className='cart__product'>
                <input type="checkbox" />
                <div className='cart__productImage'><img src="https://m.media-amazon.com/images/I/81ZgVXZjI-L._SL1500_.jpg" /></div>
                <div className='cart__productdescription'>
                    <h2>Horlicks Protein Plus Vanilla High Protein Drink for Adults 400 g Jar, Whey, Soy & Casein Powder Blend - For Muscle Mass & Strength, Veg </h2>
                    <small>In stock</small>
                    <div>
                        <div classname='cart__qty'><text>Qty: </text> <div>
                            <AddIcon></AddIcon>
                            <RemoveIcon></RemoveIcon>
                            </div>
                            </div>
                        <a>Delete</a>
                    </div>
                </div>
                <div className='cart__productCost'>$266.00</div>
            </article>
        </div>
    )
}

export default cartProduct