
import React,{Suspense,lazy} from 'react';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/login';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter,Route } from 'react-router-dom';
import {Router, Routes} from 'react-router';
import { Provider } from 'react-redux';
import store from './Store/Store';
// import CheckOut from './components/Checkout/checkout';


function app() {

  const Home=lazy(()=>import('./components/Home/Home'));
  // const Header=lazy(()=>import('./components/Header/Header'));
  const CheckOut =lazy(()=>import('./components/Checkout/checkout'));
  const SignUp =lazy(()=>import('./components/SignUp/SignUp'));
  const Login =lazy(()=>import('./components/Login/login'));
  const CartPage =lazy(()=>import('./components/Cart/CartPage'));
  return (
    <div className='app'>
        <Provider store={store}>
        <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
        <Route path='/' element={<><Header></Header><Suspense fallback={<div>Loading...</div>}><Home/></Suspense></>}></Route>
        <Route path='/checkout' element={<><Header></Header><Suspense fallback={<div>Loading...</div>}><CartPage/></Suspense></>}></Route>
        <Route path='/Login' element={<Suspense fallback={<div>Loading...</div>}><Login></Login></Suspense>} />
        <Route path='/createAcc' element={<Suspense fallback={<div>Loading...</div>}><SignUp></SignUp></Suspense>}/>
        <Route path='/gp' element={<Suspense fallback={<div>Loading...</div>}><CheckOut></CheckOut></Suspense>}/>
        </Routes>
        
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default app