import styles from "./AboutSection.module.css";
import images from "../../images/images";
import React from "react";

export const AboutSection = () => {
    return(
        <div className={styles.introContainer}>
            <header className={styles.photoAndName}>
                <img src={images.tjPortrait} alt="Terrence Nolan Portrait" className={styles.image} />
                <h1 className={styles.name}><strong className={styles.blueText}>Terrence</strong> Nolan</h1>
            </header>
            <div className={styles.textContainer}>
                <span className={styles.position}>CS @ Villanova University</span>
                <span className={styles.text}>Expected Graduation: <span className={styles.blueText}>May 2024</span></span>
                <p className={styles.text}>I am a senior CS student looking for a full time SWE role,
                    with a budding passion for front-end engineering.</p>
                <span className={styles.text}>Elective Coursework: Applied Machine Learning, Computer Graphics,
                            Overview of Cybersecurity</span>
            </div>
        </div>
    )
}