import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth, db } from '../../FireBase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { userCheck } from '../../Store/userReducers';
import { fetchCartItems } from '../../Store/cartReducer';

function Header() {
    // const [userName, setUserName] = useState('Accounts');
    // const [sign, setSign] = useState('Sign In');
    // const [user, setUser] = useState(null);
    const [search, setSearch] = useState();
    const [showsearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const totalItems = useSelector(state => state?.Items?.container?.length) || 0;
    const user = useSelector(store => store?.user?.container) || null;
    const sign = user ? 'Sign Out' : 'Sign In';
    const userName = user ? user.email : 'Accounts';

    useEffect(() => {
        dispatch(userCheck());
        // dispatch(fetchCartItems);
    }, []);
    useEffect(() => {
        if(search){
        const temp = setTimeout(()=>{getSearchResult()},200);
        return ()=>clearTimeout(temp);
        }
    }, [search])
    useEffect(() => {
        dispatch(fetchCartItems());
    }, [user])
    const getSearchResult=async ()=>{
        console.log(search);
        const res=await fetch(`https://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q=${search}`,{'User-agent':'Mozilla/5.0'});
        console.log(res);
        const data=await res.text();
        console.log(data);
    }
    const signOption = (oEvent) => {
        oEvent.preventDefault();
        if (sign === 'Sign In') {
            navigate('/Login');
        } else {
            auth.signOut().then(() => {
                // setUser(null);
                // setUserName('Accounts');
                // setSign('Sign In');
                dispatch(userCheck());
                navigate('/');

            })
        }
    }
    const checkout = (oEvent) => {
        oEvent.preventDefault();
        if (sign === 'Sign In') {
            navigate('/Login');
        } else {
            navigate('/checkout');
        }
    }

    const onClickOrder = (oEvent) => {
        oEvent.preventDefault();
        // if (sign === 'Sign In') {
        //     navigate('/Login');
        // } else {
        navigate('/orders');
        // }
    }
    return (
        <header className='header__container'>

            <Link to='/' className='link__class'><img loading='lazy' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__image' /></Link>
            <div className='header__search'>
                <div className='input__container'>
                    <input className='header__input' onBlur={() => setShowSearch(false)}
                    onFocus={()=>{setShowSearch(true)}} onChange={(e) => { setSearch(e.target.value) }}></input>
                    <a className='header__button'><SearchIcon></SearchIcon></a>
                </div>
                {showsearch &&
                    <div className='search__list'>
                        <ul>
                            <li className='search__answer'>
                                <h2>Phone</h2>
                            </li>
                            <li className='search__answer'>
                                <h2>Phone</h2>
                            </li>
                        </ul>
                    </div>
                }
            </div>

            <div className='header__options'>
                <ul className="header__nav">
                    <li className='nav_link nav__link1'><Link onClick={signOption} className='link__class'><small>Hello, {sign}</small><h3>{userName}</h3></Link></li>
                    <li className='nav_link nav__link1'><Link onClick={onClickOrder} className='link__class'><small>Returns</small><h3>& Orders</h3></Link></li>
                    <li className='nav_link '>
                        <Link className='link__class' onClick={checkout}>
                            <div className="nav__cartOption">
                                <ProductionQuantityLimitsOutlinedIcon className='nav__cart' />
                                <h3 className='nav__cartText'>Cart</h3>
                                <h3 className="nav__cartNo">{totalItems}</h3>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header