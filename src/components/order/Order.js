
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../../FireBase/FirebaseConfig';
import './order.css'

function Order() {
    const [prod, setprod] = useState();
    useEffect(() => {
        getOrders();
    }, []);
    const getOrders = async () => {
        const q = query(collection(db, "orders"), where("username", "==", auth.currentUser?.email));

        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setprod(data);
    }
    console.log(prod);
    return (
        <main className='order__container'>
            <h1 className='header__Orders'>Your Orders</h1>
            {prod?.map((item) => {
                return (<section className='order__section'>
                    <div className='section__header'>
                        <div>
                            <div>ORDER PLACED</div>
                            <div>{item.date}</div>
                        </div>
                        <div>
                            <div>TOTAL</div>
                            <div>${item.amount/100}</div>
                        </div>
                        <div>
                            <div>SHIP TO</div>
                            <div>{item.name}</div>
                        </div>
                        <div>
                            <div>ORDER #{item.ref.split('_')[1]}</div>

                        </div>
                    </div>
                    <div className='section__container'>
                        {item?.items?.map((item) => {
                            return (<div className='order__list'>
                                <img src={item.images.arrayValue?.values[0]?.stringValue} ></img>
                                <div>
                                    <h3>{item.description.stringValue}</h3>
                                    <div>Qty - {item.qty.integerValue}</div>
                                    <div><h1>$ {item.price.integerValue}</h1></div>
                                </div>
                            </div>)
                        })}
                    </div>

                </section>)
            })}
        </main>
    )
}

export default Order