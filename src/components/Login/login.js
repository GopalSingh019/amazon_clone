import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../FireBase/FirebaseConfig';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Store/userReducers';

function login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const userVal=useSelector(state=>state.user);
  // console.log(userVal);
  function onLogin() {
    if (!email || !email.includes('@gmail.com')) {
      setErrorMsg('Pls provide correct Email');
      setTimeout(() => { setErrorMsg(null) }, 3000);
      return;
    }

    if (!password || password === '') {
      setErrorMsg('Pls Enter Password');
      setTimeout(() => { setErrorMsg(null) }, 3000);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = JSON.parse(JSON.stringify(userCredential.user));
        console.log(user);
        // ...
        dispatch(setUser({type:'users',payload:user}));
        setEmail(null);
        setPassword(null);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        setTimeout(() => { setErrorMsg(null) }, 3000);
        setEmail(null);
        setPassword(null);
      });
  }
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
          <div className='login__Email' >Email</div>
          <input type='text' value={email} className='login__input' onChange={(oEvent) => { setEmail(oEvent.target.value) }} />
          <div className='login__Email'>Password</div>
          <input type='password' value={password} className='login__input' onChange={(oEvent) => { setPassword(oEvent.target.value) }} />
          <div className='login__btn' onClick={onLogin}>Login</div>
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
    {(errorMsg) &&
      <Snackbar open='true' autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    }
  </>
  )
}

export default login