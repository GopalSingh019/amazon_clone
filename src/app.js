
import React,{Suspense} from 'react';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/login';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter,Route } from 'react-router-dom';
import {Router, Routes} from 'react-router';
import { Provider } from 'react-redux';
import store from './Store/Store';
import CheckOut from './components/Checkout/checkout';


function app() {

  const Home=React.lazy(()=>import('./components/Home/Home'));

  return (
    <div className='app'>
        <Provider store={store}>
        <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
        <Route path='/' element={<><Suspense fallback={<div>Loading...</div>}><Header></Header><Home/></Suspense></>}></Route>
        <Route path='/checkout' element={<><Header></Header><CartPage/></>}></Route>
        <Route path='/Login' element={<Login></Login>} />
        <Route path='/createAcc' element={<SignUp></SignUp>}/>
        <Route path='/gp' element={<CheckOut></CheckOut>}/>
        </Routes>
        
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default app