import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ pageTitle }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const openNav = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = "100%";
            setIsSidebarOpen(true);
        }
    };

    const closeNav = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = "0";
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        const closeOffClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeNav();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener('mousedown', closeOffClick);
        } else {
            document.removeEventListener('mousedown', closeOffClick);
        }

        return () => {
            document.removeEventListener('mousedown', closeOffClick);
        };
    }, [isSidebarOpen]);

    return (
        <header className={styles.appHeader}>
            <h1 className={styles.headerTitle}>{pageTitle}</h1>
            <div ref={sidebarRef} className={styles.sidebar}>
                <div className={styles.navList}>
                    <button
                        onClick={closeNav}
                        className={styles.closeBtn}
                        aria-label="close-menu"
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={styles.xIcon}
                            size='2x'
                        />
                    </button>
                    <Link to="/" onClick={closeNav} className={styles.pageLink}>Home</Link>
                    <Link to="/experience" onClick={closeNav} className={styles.pageLink}>Experience</Link>
                    <Link to="/projects" onClick={closeNav} className={styles.pageLink}>Projects</Link>
                </div>
            </div>
            <button
                onClick={openNav}
                className={styles.barsBtn}
                aria-label="menu"
            >
                <FontAwesomeIcon
                    icon={faBars}
                    className={styles.barsIcon}
                    size='2x'
                />
            </button>
        </header>
    );
}

export default Header;
