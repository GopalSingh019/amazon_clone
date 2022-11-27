import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    <section className='home__container'>
        <img className='home__img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        <div className='home__rows'>
            <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
            <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
        </div>
        <div className='home__rows'>
        <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
            <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
            <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
        </div>
        <div className='home__rows'>
        <Product title="Atomic Habits by James Clear"
            rating="4" img="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" price="229.99"/>
        </div>
    </section>
  )
}

export default Home