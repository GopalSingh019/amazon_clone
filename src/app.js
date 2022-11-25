
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage';
import { BrowserRouter,Route } from 'react-router-dom';
import {Router, Routes} from 'react-router'

function app() {
  return (
    <div className='app'>
        
        <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/checkout' element={<CartPage/>}></Route>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default app