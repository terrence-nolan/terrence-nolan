import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import images from "../../images/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className={styles.aboutMain}>
            <div className={styles.introSection}>
                <img src={images.tjPortrait} alt="Terrence Nolan Portrait" className={styles.image} />
                <div className={styles.card}>
                    <h2>Terrence Nolan</h2>
                    <h3>Student at Villanova University</h3>
                    <h3>Expected Graduation: May 2024</h3>
                </div>
            </div>
            <div className={styles.card}>
                <p>Outside of the classroom, I enjoy drawing, being active, and teaching myself how to play the guitar.
                    Some of my more active hobbies include playing soccer, rock climbing, and running.
                </p>
            </div>
            <div className={styles.connectLinksContainer}>
                <Link
                    to={'mailto:terrencenolan@proton.me'}
                >
                    <div className={`${styles.emailLink} ${styles.connectLinks}`}>
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </div>
                </Link>
                <Link
                    to={'https://github.com/terrence-nolan'}
                >
                    <div className={`${styles.github} ${styles.connectLinks}`}>
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </div>
                </Link>
                <Link
                    to={'https://www.linkedin.com/in/terrencenolan/'}
                >
                    <div className={`${styles.linkedin} ${styles.connectLinks}`}>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </div>
                </Link>
                <Link
                    to={'tel:+16179092358'}
                >
                    <div className={`${styles.phone} ${styles.connectLinks}`}>
                        <FontAwesomeIcon icon={faPhone} size='2x' />
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default AboutPage;
