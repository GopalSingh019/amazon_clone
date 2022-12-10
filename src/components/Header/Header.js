import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Header() {
    const[cartTotal,setCartTotal]=useState(0);
    const[userName,setUserName]=useState('Sign In');
    const user=useSelector(state=>state.user.user);
    useEffect(()=>{
        if(user){
            setUserName(user.payload.email);
        }
    },[]);
    return (
        <header className='header__container'>

            <Link to='/' className='link__class'><img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__image' /></Link>
            <div className='header__search'>
                <input className='header__input'></input>
                <a className='header__button'><SearchIcon></SearchIcon></a>
            </div>
            <div className='header__options'>
                <ul className="header__nav">
                    <li className='nav_link nav__link1'><Link to='/Login' className='link__class'><small>Hello, {userName}</small><h3>Accounts</h3></Link></li>
                    <li className='nav_link nav__link1'><a><small>Returns</small><h3>& Orders</h3></a></li>
                    <li className='nav_link '>
                        <Link to='/checkout' className='link__class'>
                            <div className="nav__cartOption">
                                <ProductionQuantityLimitsOutlinedIcon className='nav__cart' />
                                <h3 className='nav__cartText'>Cart</h3>
                                <h3 className="nav__cartNo">{cartTotal}</h3>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header