import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ResumePDF from './../../utils/terrence-nolan-resume.pdf';

const Header = ({ scrolled, toggleTheme, theme }) => {
    const DesktopNavbar = () => {
        return (
            <div className={styles.desktopNavbar}>
                <div className={styles.pageLinkContainer}>
                    <Link
                        to="/"
                        className={`${styles.pageLink} ${scrolled ? styles.childrenScrolled : ''}`}
                    >
                        Home
                    </Link>
                </div>
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
                <div className={styles.pageLinkContainer}>
                    <Link
                        to={ResumePDF}
                        target="_blank"
                        className={`${styles.pageLink} ${scrolled ? styles.childrenScrolled : ''}`}
                    >
                        Resume
                    </Link>
                </div>
                <button onClick={toggleTheme} className={styles.themeButton}>
                    Toggle Theme
                </button>
            </div>
        )
    }

    const MobileNavbar = () => {
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

        return (
            <div className={styles.mobileNavbar}>
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
                        <Link
                            to={ResumePDF}
                            target="_blank"
                            onClick={closeNav}
                            className={styles.pageLink}
                        >
                            Resume
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileHeaderButtons}>
                    <button onClick={toggleTheme} className={styles.themeButton}>
                        Toggle Theme
                    </button>
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
            <MobileNavbar />
        </header>
    );
}

export default Header;
