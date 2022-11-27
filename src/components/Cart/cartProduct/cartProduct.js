import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartProduct.css';

function cartProduct() {
    return (
        <div>
            <article className='cart__product'>

                <input type="checkbox" />

                <div className='cart__productImage'><img src="https://m.media-amazon.com/images/I/81ZgVXZjI-L._SL1500_.jpg" /></div>

                <div className='cart__productdescription'>
                    <div className='cart__productDesc'><h2>Horlicks Protein Plus Vanilla High Protein Drink for Adults 400 g Jar, Whey, Soy & Casein Powder Blend - For Muscle Mass & Strength, Veg </h2></div>
                    <small>In stock</small>

                    <div className='cart__options'>
                        <div className='cart__productqty'>
                            <h3>Qty: </h3>
                            <div className='cart__productqtyBtn'>
                                <AddIcon className='cart__icon'></AddIcon>
                                <div>9</div>
                                <RemoveIcon className='cart__icon'></RemoveIcon>
                            </div>
                        </div>
                        <div className='cart__optionsepartaor'></div>
                        <a className='cart__deleteoption'>Delete</a>
                    </div>

                </div>

                <div className='cart__productCost'>$266.00</div>
            </article>
        </div>
    )
}

export default cartProduct