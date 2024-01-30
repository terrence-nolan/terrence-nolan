import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ scrolled }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

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

    const DesktopNavbar = () => {
        return (
            <div className={styles.desktopNavbar}>
                <div className={styles.pageLinkContainer}>
                    <Link
                        to="/experience"
                        className={`${styles.pageLink} ${scrolled ? styles.childrenScrolled : ''}`}
                    >
                        Experience
                    </Link>
                </div>
                <div className={styles.pageLinkContainer}>
                    <Link
                        to="/projects"
                        className={`${styles.pageLink} ${scrolled ? styles.childrenScrolled : ''}`}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <header className={`${styles.appHeader} ${scrolled ? styles.scrolled : ''}`}>
            <Link
                to="/"
                className={`${styles.headerTitle} ${scrolled ? styles.childrenScrolled : ''}`}
            >
                Terrence Nolan
            </Link>
            <DesktopNavbar />
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
                    <Link to="/" onClick={closeNav} className={styles.pageLink}>About</Link>
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
                    className={`${styles.barsIcon} ${scrolled ? styles.childrenScrolled : ''}`}
                    size='2x'
                />
            </button>
        </header>
    );
}

export default Header;
