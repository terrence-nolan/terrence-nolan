import React from "react";
import styles from './ConnectionLinks.module.css';
import ResumePDF from './../../utils/terrence-nolan-resume.pdf';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFile} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ConnectionLinks = () => {
    return (
        <div className={styles.connectLinksContainer}>
            <a
                href={'mailto:terrencenolan@proton.me'}
                className={styles.link}
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
                href={'https://github.com/terrence-nolan'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href={'https://www.linkedin.com/in/terrencenolan/'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faFile} /><span className={styles.linkText}> Resume</span>
            </a>
        </div>
    )
}

export default ConnectionLinks;