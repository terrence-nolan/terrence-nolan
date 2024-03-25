import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, toggleTheme, theme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 5;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Header scrolled={scrolled} toggleTheme={toggleTheme} theme={theme} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
