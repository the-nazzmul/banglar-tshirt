import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='container mx-auto flex justify-between text-2xl font-bold'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/order">Orders</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Header;