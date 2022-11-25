import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

function Header() {
    return (
        <header >
            <div className='header__container'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__image' />
                <div className='header__search'>
                    <input className='header__input'></input>
                    <a className='header__button'><SearchIcon></SearchIcon></a>
                </div>
                <div className='header__options'>
                    <ul className="header__nav">
                        <li className='nav_link'><a><small>Hello, sign in</small><h3>Account</h3></a></li>
                        <li className='nav_link'><a><small>Returns</small><h3>& Orders</h3></a></li>
                        <li className='nav_link nav__cartOption'><ProductionQuantityLimitsOutlinedIcon className='nav__cart'/><h3 className='nav__cartText'>Cart</h3><h3 className="nav__cartNo">0</h3></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header