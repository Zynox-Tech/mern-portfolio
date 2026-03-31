import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { useAuth } from "../store/Auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className="container">
            <div className="logo">
                <NavLink to="/">
                    <img className="logo-img" src="./images/logo.png" alt="Logo"/>
                </NavLink>
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                        <li><NavLink to="/contactme" activeClassName="active">Contact Me</NavLink></li>


                        {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" activeClassName="active" >Logout</NavLink>
                </li>
              ) : (
                <>
                  <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
                  <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                </>
              )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
