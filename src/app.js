
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/login'
import { BrowserRouter,Route } from 'react-router-dom';
import {Router, Routes} from 'react-router'

function app() {
  return (
    <div className='app'>
        
        <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
        <Route path='/' element={<><Header></Header><Home/></>}></Route>
        <Route path='/checkout' element={<><Header></Header><CartPage/></>}></Route>
        <Route path='/Login' element={<Login></Login>} />
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default app