import React from "react";
import styles from "./AboutSection.module.css";
import images from "../../images/images";

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
            </div>
        </div>
    )
}