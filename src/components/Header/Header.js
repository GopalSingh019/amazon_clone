import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';

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
                </div>
            </div>
        </header>
    )
}

export default Header