import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FireBase/FirebaseConfig';
import { Alert, Snackbar } from '@mui/material';

function SignUp() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPasssword, setConfirmPassword] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    function onSignup() {

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
        if (password.length < 6) {
            setErrorMsg('Password should be greater than 6 digits!!');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (!confirmPasssword || confirmPasssword === '') {
            setErrorMsg('Pls confirm Password');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (confirmPasssword.length < 6) {
            setErrorMsg('Pls confirm Password');
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }
        if (password !== confirmPasssword) {
            setErrorMsg("Confirm Password doesn't Match!!");
            setTimeout(() => { setErrorMsg(null) }, 3000);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                window.open('/', '_self');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
                setErrorMsg(errorMessage);
                setTimeout(() => { setErrorMsg(null) }, 3000);
                setEmail(null);
                setPassword(null);
                setConfirmPassword(null);
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
                        <input value={email} type='text' className='login__input' onChange={(oEvent) => { setEmail(oEvent.target.value) }} />
                        <div className='login__Email'>Password</div>
                        <input value={password} type='text' className='login__input' onChange={(oEvent) => { setPassword(oEvent.target.value) }} />
                        <div className='login__Email'>Confirm Password</div>
                        <input value={confirmPasssword} type='password' className='login__input' onChange={(oEvent) => { setConfirmPassword(oEvent.target.value) }} />
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
                <Snackbar open='true' autoHideDuration={6000} anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {errorMsg}
                    </Alert>
                </Snackbar>
            }
        </main>
    )
}

export default SignUp