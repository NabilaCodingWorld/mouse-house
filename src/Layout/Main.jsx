import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Share/Navbar/Navbar';
import Footer from '../Pages/Share/Footer/Footer';
import Header from '../Pages/Share/Header/Header';

const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;