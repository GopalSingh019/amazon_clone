import React, { useEffect,useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import cartItems from '../Cart/cp';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../Store/cartReducer';
import { fetchAllProducts } from '../../Store/productReducer';

function Home() {
  const dispatch = useDispatch();
  const [products,setProducts]=useState();
  const items=useSelector(state=>state?.Products?.products);
  
  useEffect(()=>{
    setProducts(items);
    if(products?.length){
    var finalItems=products[0].reduce((acc,item,index)=>{
      index=parseInt(index/6);
      acc[index]=(acc[index])?[...acc[index],item]:[{...item}];
      return acc;
    },[]);
    setProducts(finalItems);
  }
  },[items]);
  useEffect(() => {
    dispatch(setCartItems());
    //dispatch action for loading products
    dispatch(fetchAllProducts('https://dummyjson.com/products'));
  }, []);

  return (
    <section className='home__container'>
      <img className='home__img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
      {products?.length>0 && products.map((item)=>{
       return (<><div className='home__rows'>
        <Product title={item[0].description} id='001'
          rating={item[0].rating} img={item[0].thumbnail} price={item[0].price} >{item[0]}</Product>
        <Product title={item[1].description} id='002'
          rating={item[1].rating} img={item[2].thumbnail} price={item[1].price} >{item[1]}</Product>
      </div>
      <div className='home__rows home__rows2'>
        <Product title={item[2].description} id='003'
          rating={item[2].rating} img={item[2].thumbnail} price={item[2].price} >{item[2]}</Product>
        <Product title={item[3].description} id='004'
          rating={item[3].rating} img={item[3].thumbnail} price={item[3].price} >{item[3]}</Product>
        <Product title={item[4].description} id='005'
          rating={item[4].rating} img={item[4].thumbnail} price={item[4].price} >{item[4]}</Product>
      </div>
      <div className='home__rows'>
        <Product title={item[5].description} id='006'
          rating={item[5].rating} img={item[5].thumbnail} price={item[5].price} >{item[5]}</Product>
      </div></>)
      })
      }
    </section>
  )
}

export default Home