
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import './cartPage.css';
import CartProduct from './cartProduct/cartProduct';
import { fetchCartItems,  } from '../../Store/cartReducer';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../FireBase/FirebaseConfig';



function CartPage() {
  const [costTotal, setCostTotal] = useState(() => { return 0; });
  const [selected, setSelected] = useState(() => { return 0; });
  const totalItems = useSelector(store => store?.Items?.container);
  const savedItems=React.useRef();
  savedItems.current=totalItems;
  const dispatch = useDispatch();
  const navigate=useNavigate();




  useMemo(() => {
    if (totalItems?.length > 0) {
      let count = 0;
      let sumTotal = 0;
      for (let item in totalItems) {
        if (totalItems[item].selected.booleanValue === true) {
          count++;
          sumTotal += Number(totalItems[item].price.integerValue * (totalItems[item].qty.integerValue || 1));
        }
      }
      setSelected(count);
      console.log(sumTotal);
      setCostTotal(sumTotal);
    };
  }, [totalItems]);

  const onDeselectAll =async () => {
    await totalItems.forEach(element => {
      updateDoc(doc(db,'cart',element.ref),{selected:false});
    });
    // updateDoc(doc(db,'cart',ref),{selected:false);
    dispatch(fetchCartItems());
  }

  const onSelectAll =async () => {
    await totalItems.forEach(element => {
      updateDoc(doc(db,'cart',element.ref),{selected:true});
    });
    // updateDoc(doc(db,'cart',ref),{selected:false);
    dispatch(fetchCartItems());
  }

  

  const onProceedToCheckOut=()=>{
    if(costTotal>0){
      navigate('/gp');
    }
  }

  return (
    <div className='cart__container'>

      <section className='cart__main'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg" />
        <h1>Shopping Cart</h1>
        {(totalItems?.length > 0) ? ((selected > 0) ? <h4><a className='cart__Link' onClick={onDeselectAll}>Deselect all items</a></h4> :
          <h4>No items selected. <a className='cart__Link' onClick={onSelectAll}>Select all items</a></h4>) : null
        }
        <hr></hr>

        {/* cartProduct portion  and separator*/}
        {totalItems?.map((item,index) => {
          return <><CartProduct key={index} >{item}</CartProduct><hr></hr></>
        })}

        {/* <hr></hr>
        <hr></hr> */}

        {/* subtotal portion */}
        <div className='cart__subtotal'><h1>Subtotal({selected} items): ${costTotal}</h1></div>

      </section>

      {/* proceed to checkout portion */}
      <aside className='card__aside'>
        <div className='cart__total'>
          <h1>{`Subtotal(${selected} items):$ `}</h1>
          <h1 className='cart__total'>{`${costTotal}`}</h1>
        </div>
        <div className='cart__buyBtn' onClick={onProceedToCheckOut}>Proceed to Buy</div>
      </aside>
    </div>
  )
}

export default CartPage