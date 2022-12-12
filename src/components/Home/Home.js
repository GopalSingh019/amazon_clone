import React, { useEffect } from 'react';
import Product from '../Product/Product';
import './Home.css';
import items from '../Cart/cp';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../Store/cartReducer';

function Home() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setCartItems({ payload: items }));
  }, []);

  return (
    <section className='home__container'>
      <img className='home__img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

      <div className='home__rows'>
        <Product title="Atomic Habits by James Clear" id='001'
          rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99" />
        <Product title="Atomic Habits by James Clear" id='002'
          rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99" />
      </div>
      <div className='home__rows home__rows2'>
        <Product title="Atomic Habits by James Clear" id='003'
          rating="4" img="https://m.media-amazon.com/images/I/81ZgVXZjI-L._SL1500_.jpg" price="229.99" />
        <Product title="Atomic Habits by James Clear" id='004'
          rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99" />
        <Product title="Atomic Habits by James Clear" id='005'
          rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99" />
      </div>
      <div className='home__rows'>
        <Product title="Atomic Habits by James Clear" id='006'
          rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99" />
      </div>
    </section>
  )
}

export default Home