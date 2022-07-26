import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import googleImage from "../Images/google-logo.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handelSignIn = () => {
        signInWithGoogle()
            .then(() => navigate(from, { replace: true }));
    };
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ minHeight: '100vh' }}>
            <img src={googleImage} style={{ width: '50%' }} className="mb-3" alt="" />
            <Button onClick={handelSignIn} className="px-5 py-2">Sign In With Google</Button>
            {error && <div className="text-danger">{error}</div>}
        </div>
    );
};

export default Login;