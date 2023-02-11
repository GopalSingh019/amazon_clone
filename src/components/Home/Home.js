import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../Store/cartReducer';
import { fetchAllProducts } from '../../Store/productReducer';
import { Alert, Snackbar } from '@mui/material';
import Loading from '../Loader/Loader';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [addSuccess, setAddSuccess] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const items = useSelector(state => state?.Products?.products);
  const shimmer = useRef();

  const observer = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting)
      setPage(page => { if (page > 6) { setLoading(false); return page; } else return page + 1; })
  }, { root: shimmer.current, threshold: 1 });

  useEffect(() => {
    // setProducts(items);
    if (items?.length) {
      var finalItems = items[0].reduce((acc, item, index) => {
        index = parseInt(index / 6);
        // acc[index] = (acc[index]) ? [...acc[index], item] : [{ ...item }];
        if (!acc[index]) acc[index] = [];
        acc[index].push(item);
        return acc;
      }, []);
      setProducts(finalItems);
    }
  }, [items]);
  useEffect(() => {
    dispatch(setCartItems());
    //dispatch action for loading products
    dispatch(fetchAllProducts(`https://dummyjson.com/products?limit=12&skip=${page * 12}`, items));
    observer.observe(shimmer.current);
  }, [page]);

  const setAddSuccessFun = (val) => {
    setAddSuccess(val);
    if(val)
    setTimeout(() => { setAddSuccess(false) }, 6000);
  }

  return (
    <section className='home__container'>
      <img loading='lazy' className='home__img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
      {products?.length > 0 && products.map((item) => {
        return (<><div className='home__rows'>
          <Product key={item[0].id} title={item[0].description} id='001' setAddSuccessFun={setAddSuccessFun}
            rating={item[0].rating} img={item[0].thumbnail} price={item[0].price} >{item[0]}</Product>
          <Product key={item[1].id} title={item[1].description} setAddSuccessFun={setAddSuccessFun}
            rating={item[1].rating} img={item[2].thumbnail} price={item[1].price} >{item[1]}</Product>
        </div>
          <div className='home__rows home__rows2'>
            <Product key={item[2].id} title={item[2].description} setAddSuccessFun={setAddSuccessFun}
              rating={item[2].rating} img={item[2].thumbnail} price={item[2].price} >{item[2]}</Product>
            <Product key={item[3].id} title={item[3].description} setAddSuccessFun={setAddSuccessFun}
              rating={item[3].rating} img={item[3].thumbnail} price={item[3].price} >{item[3]}</Product>
            <Product key={item[4].id} title={item[4].description} setAddSuccessFun={setAddSuccessFun}
              rating={item[4].rating} img={item[4].thumbnail} price={item[4].price} >{item[4]}</Product>
          </div>
          <div className='home__rows'>
            <Product key={item[5].id} title={item[5].description} setAddSuccessFun={setAddSuccessFun}
              rating={item[5].rating} img={item[5].thumbnail} price={item[5].price} >{item[5]}</Product>
          </div>
        </>)
      })
      }
      <Snackbar open={addSuccess} autoHideDuration={6000} >
        <Alert onClose={() => { setAddSuccess(false) }} severity="success" sx={{ width: '100%' }}>
          Item Added To Cart😊!
        </Alert>
      </Snackbar>
      {loading && <><div className='home__loader' ref={shimmer}>
        <Loading></Loading>
        <Loading></Loading>
      </div>
        <div className='home__loader'>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
        </div>
        <div className='home__loader'>
          <Loading></Loading>
        </div></>
      }
    </section>
  )
}

export default Home