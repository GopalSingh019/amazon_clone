import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartProduct.css';

function cartProduct(props) {
    let {id,title,price,qty,selected,thumbnail,brand}=props.children;

    const onCheckBoxChange=()=>{
        console.log(productid);
        selected=false;
    }
    const onIncrementItem=()=>{
        qty=qty+1;
    }
    const onDecrementItem=()=>{
        if(!qty<1)
        qty--;
    }
    const onRemoveItem=()=>{

    }
    return (
        <div>
            <article className='cart__product'>

                <input type="checkbox" checked={selected} onChange={onCheckBoxChange}/>

                <div className='cart__productImage'><img src={thumbnail} /></div>

                <div className='cart__productdescription'>
                    <div className='cart__productDesc'><h2>{brand}: {title}</h2></div>
                    <div className='cart__productCostMob'>${price}</div>
                    <small>In stock</small>

                    <div className='cart__options'>
                        <div className='cart__productqty'>
                            <h3>Qty: </h3>
                            <div className='cart__productqtyBtn'>
                                <AddIcon className='cart__icon' onClick={onIncrementItem}></AddIcon>
                                <div>{qty}</div>
                                <RemoveIcon className='cart__icon' onClick={onDecrementItem}></RemoveIcon>
                            </div>
                        </div>
                        <div className='cart__optionsepartaor'></div>
                        <a className='cart__deleteoption' onClick={onRemoveItem}>Delete</a>
                    </div>

                </div>

                <div className='cart__productCost'>${price}</div>
            </article>
            <div className='cart__optionsMob'>
                        <div className='cart__productqty'>
                            <h3>Qty: </h3>
                            <div className='cart__productqtyBtn'>
                                <AddIcon className='cart__icon' onClick={onIncrementItem}></AddIcon>
                                <div>{qty}</div>
                                <RemoveIcon className='cart__icon' onClick={onDecrementItem}></RemoveIcon>
                            </div>
                        </div>
                        <div className='cart__optionsepartaor'></div>
                        <a className='cart__deleteoption' onClick={onRemoveItem}>Delete</a>
                    </div>
        </div>
    )
}

export default cartProduct