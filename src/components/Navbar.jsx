import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="Navbar">
            <NavLink to="/" className={({isActive})=>(isActive ? "title active" : "title")} >Home</NavLink>
            <NavLink to="/Students" className={({isActive})=>(isActive ? "title active" : "title")} >Students</NavLink>
            <NavLink to="/ContactUs" className={({isActive})=>(isActive ? "title active" : "title")} >Contact Us</NavLink>
        </div>
    );
}

export default Navbar;