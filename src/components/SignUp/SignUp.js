import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FireBase/FirebaseConfig';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Store/userReducers';

function SignUp() {
    const email = useRef(null);
    const password = useRef(null);
    const confirmPasssword =useRef(null);
    const [errorMsg, setErrorMsg] = useState(null);
    

    const dispatch=useDispatch();
    const navigate=useNavigate();

    function onSignup() {

        if (!email.current.value || !email.current.value.includes('@gmail.com')) {
            email.current.focus();
            setErrorMsg('Pls provide correct Email');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }

        if (!password.current.value || password.current.value === '') {
            password.current.focus();
            setErrorMsg('Pls Enter Password');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (password.current.value.length < 6) {
            password.current.focus();
            setErrorMsg('Password should be greater than 6 digits!!');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (!confirmPasssword.current.value || confirmPasssword.current.value === '') {
            confirmPasssword.current.focus();
            setErrorMsg('Pls confirm Password');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (confirmPasssword.current.value.length < 6) {
            confirmPasssword.current.focus();
            setErrorMsg('Pls confirm Password');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (password.current.value !== confirmPasssword.current.value) {
            confirmPasssword.current.focus();
            setErrorMsg("Confirm Password doesn't Match!!");
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = JSON.parse(JSON.stringify(userCredential.user));
                dispatch(setUser({type:'users',payload:user}));
                email.current.value=null;
                password.current.value=null;
                confirmPasssword.current.value=null;
                // ...
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
                setErrorMsg(errorMessage);
                setTimeout(() => { setErrorMsg(null) }, 3000);
                email.current.value=null;
                password.current.value=null;
                confirmPasssword.current.value=null;
            });
    }
    return (
        <main style={{ 'positon': 'relative' }}>
            <header >
                <Link to="/" className='login__header'>
                    <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"></img></Link>
            </header>
            <section className='login__section'>
                <div className='login__container'>
                    <div className='login__title'>
                        <h1>Create Account</h1>
                    </div>
                    <div>
                        <div className='login__Email'>Email</div>
                        <input  type='text' className='login__input' ref={email} />
                        <div className='login__Email'>Password</div>
                        <input  type='password' className='login__input' ref={password} />
                        <div className='login__Email'>Confirm Password</div>
                        <input  type='password' className='login__input' ref={confirmPasssword} />
                        <div className='login__btn' onClick={onSignup}>Create Account</div>
                    </div>
                    <div className='login__new'>
                        <hr className='login__hr'></hr>
                        <div className='login__newtoamz'>New to Amazon?</div>
                        <hr className='login__hr'></hr>
                    </div>
                    <div className='login__createAcc'><Link to='/Login' className='login__link'>Already have Account? Login</Link></div>
                </div>
            </section>
            <hr className='login__end'></hr>
            {(errorMsg) &&
                <Snackbar open={true} autoHideDuration={6000} anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
                    <Alert severity="error" sx={{ width: '100%' }} variant="filled">
                        {errorMsg}
                    </Alert>
                </Snackbar>
            }
        </main>
    )
}

export default SignUp