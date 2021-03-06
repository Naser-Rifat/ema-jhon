import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../Hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user,logOut}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink >
                <NavLink to="/orders">Order Review</NavLink >
                <NavLink to="/inventory">Manage Inventory</NavLink >
                    {
                        user.email &&<span className="header-text"> Hello {user.displayName} </span>

                    }                {
                    user?.email ? <button onClick={logOut}> Logout</button> :
                        
                    <NavLink to="/login">Login</NavLink >

                }           
                 </nav>
        </div>
    );
};

export default Header;