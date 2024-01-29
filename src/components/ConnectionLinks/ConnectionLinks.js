import React from "react";
import styles from './ConnectionLinks.module.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ConnectionLinks = () => {
    return (
        <div className={styles.connectLinksContainer}>
            <Link
                to={'mailto:terrencenolan@proton.me'}
            >
                <div className={`${styles.emailLink} ${styles.connectLinks}`}>
                    <FontAwesomeIcon icon={faEnvelope} size={'1x'} />
                </div>
            </Link>
            <Link
                to={'https://github.com/terrence-nolan'}
            >
                <div className={`${styles.github} ${styles.connectLinks}`}>
                    <FontAwesomeIcon icon={faGithub} size={'1x'} />
                </div>
            </Link>
            <Link
                to={'https://www.linkedin.com/in/terrencenolan/'}
            >
                <div className={`${styles.linkedin} ${styles.connectLinks}`}>
                    <FontAwesomeIcon icon={faLinkedin} size={'1x'} />
                </div>
            </Link>
            <Link
                to={'tel:+16179092358'}
            >
                <div  className={`${styles.phone} ${styles.connectLinks}`}>
                    <FontAwesomeIcon icon={faPhone} size={'1x'} />
                </div>
            </Link>
        </div>
    )
}

export default ConnectionLinks;