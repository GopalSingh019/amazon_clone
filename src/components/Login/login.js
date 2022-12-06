import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';
function login() {
  return (<>
    <header >
      <Link to="/" className='login__header'>
      <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"></img></Link>
    </header>
    <section className='login__section'>
      <div className='login__container'>
      <div className='login__title'>
        <h1>Sign In</h1>
      </div>
      <div>
        <div className='login__Email'>Email</div>
        <input type='text' className='login__input'/>
        <div className='login__Email'>Password</div>
        <input type='password' className='login__input'/>
        <div className='login__btn'>Login</div>
      </div>
      <div className='login__new'>
        <hr className='login__hr'></hr>
        <div className='login__newtoamz'>New to Amazon?</div>
        <hr className='login__hr'></hr>
      </div>
      <div className='login__createAcc'><Link to='/createAcc' className='login__link'>Create your Amazon account</Link></div>
      </div>
    </section>
    <hr className='login__end'></hr>
    </>
  )
}

export default login