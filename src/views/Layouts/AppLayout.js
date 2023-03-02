import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./../../assets/scss/layouts.scss"

function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;
