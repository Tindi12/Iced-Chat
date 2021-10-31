import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from "firebase/app";

const Login = () => {
    return(
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to Iced Chat!</h2>

                <div
                     className='login-button google'
                     onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>

                    <br/>  <br />

                    <div
                     className='login-button facebook'
                     onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign in with Facebook
                </div>
            </div>
            <div class="container">
                <h5>DEVELOPED BY TINDI ONYANGO</h5>
                <strong><p>CEO, Senior Software Engineer, Iced.Inc</p></strong>
            </div>
        </div>
    );
}

export default Login;