import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import GoogleButton from 'react-google-button'
import useAuth from '../Hooks/useAuth';


const Login = () => {

    const {GoogleSignIn}=useAuth();
    const location =useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || "/shop";

    const handleGoogleSignIn=()=>{
        GoogleSignIn()
        .then((result)=>{
            history.push(redirect_uri);
           
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                   <input className="input" type="email" name="Email" id="" placeholder="Email"/>
                   <br />
                   <br />
                   <input className="input" type="password" name="Password" id="" placeholder="password"/>
                   <br />
                   <br />
                   <input className="btn-regular " type="submit" value="Login" />
                </form>

                <p>Are you new ? <Link to="/register">Create Account</Link></p>


                <br /><br />

                <GoogleButton type="light" 
                  onClick={handleGoogleSignIn}
                />
            </div>
        </div>
    );
};

export default Login;