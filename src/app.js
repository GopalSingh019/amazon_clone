
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/login';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter,Route } from 'react-router-dom';
import {Router, Routes} from 'react-router';
import { Provider } from 'react-redux';
import store from './Store/Store';


function app() {
  return (
    <div className='app'>
        <Provider store={store}>
        <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
        <Route path='/' element={<><Header></Header><Home/></>}></Route>
        <Route path='/checkout' element={<><Header></Header><CartPage/></>}></Route>
        <Route path='/Login' element={<Login></Login>} />
        <Route path='/createAcc' element={<SignUp></SignUp>}/>
        </Routes>
        
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default app