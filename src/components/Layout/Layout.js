// src/components/Layout.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <Header pageTitle={pageTitle} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
