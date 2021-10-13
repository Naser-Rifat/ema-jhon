import React from 'react';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form"> 
               <div>
               <form onSubmit="">
                <h2>Create Account</h2>

                   <input className="input" type="email" name="Email" id="" placeholder="Email"/>
                   <br />
                   <br />
                   <input className="input" type="password" name="Password" id="" placeholder="password"/>
                   <br />
                   <br />
                   <input className="input" type="password" name="re-type-Password" id="" placeholder="Confirm-Password"/>
                   <br />
                   <br />
                   <input className="btn-regular " type="submit" value="Submit" />
                </form>
                <br />
                <br />

               
               <p>Already have a account ? <Link to="/login">Login</Link></p>

               <div>----------------------------</div>
               <br /><br />
               <GoogleButton type="light" 
                  onClick={() => { console.log('Google button clicked') }}
                />
               </div>
               
        </div>
    );
};

export default Register;