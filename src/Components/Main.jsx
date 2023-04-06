import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Home from './Home';


const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;