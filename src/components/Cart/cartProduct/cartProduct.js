import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartProduct.css';
import { doc, updateDoc,deleteDoc } from 'firebase/firestore';
import { db } from '../../../FireBase/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '../../../Store/cartReducer';

function cartProduct(props) {
    let {title,price,qty,selected,thumbnail,brand,ref,stock}=props.children;
    const dispatch=useDispatch();

    const onCheckBoxChange=async ()=>{
        // props.update(id,"selected",!selected);
        await updateDoc(doc(db,'cart',ref),{selected:!selected.booleanValue});
        dispatch(fetchCartItems());

    }
    const onIncrementItem=async ()=>{
        if(qty.integerValue<stock.integerValue){
            let val=+qty.integerValue+1;
        await updateDoc(doc(db,'cart',ref),{qty:val});
        dispatch(fetchCartItems());
        }
    }
    const onDecrementItem=async ()=>{
        if(qty.integerValue>1){
            let val=qty.integerValue-1;
        await updateDoc(doc(db,'cart',ref),{qty:val});
        dispatch(fetchCartItems());
        }
    }
    const onRemoveItem=async ()=>{
        await deleteDoc(doc(db,'cart',ref));
        dispatch(fetchCartItems());
    }
    return (
        <div>
            <article className='cart__product'>

                <input type="checkbox" checked={selected.booleanValue} onChange={onCheckBoxChange}/>

                <div className='cart__productImage'><img src={thumbnail.stringValue} /></div>

                <div className='cart__productdescription'>
                    <div className='cart__productDesc'><h2>{brand.stringValue}: {title.stringValue}</h2></div>
                    <small>In stock</small>
                    <div className='cart__productCostMob'>${price.integerValue}</div>

                    <div className='cart__options'>
                        <div className='cart__productqty'>
                            <h3>Qty: </h3>
                            <div className='cart__productqtyBtn'>
                                <AddIcon className='cart__icon' onClick={onIncrementItem}></AddIcon>
                                <div>{qty.integerValue}</div>
                                <RemoveIcon className='cart__icon' onClick={onDecrementItem}></RemoveIcon>
                            </div>
                        </div>
                        <div className='cart__optionsepartaor'></div>
                        <a className='cart__deleteoption' onClick={onRemoveItem}>Delete</a>
                    </div>

                </div>

                <div className='cart__productCost'>${price.integerValue}</div>
            </article>
            <div className='cart__optionsMob'>
                        <div className='cart__productqty'>
                            <h3>Qty: </h3>
                            <div className='cart__productqtyBtn'>
                                <AddIcon className='cart__icon' onClick={onIncrementItem}></AddIcon>
                                <div>{qty.integerValue}</div>
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