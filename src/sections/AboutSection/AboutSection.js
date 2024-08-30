import React from "react";
import styles from "./AboutSection.module.css";
import images from "../../images/images";

export const AboutSection = () => {
  return(
    <div className={styles.introContainer}>
      <header className={styles.photoAndName}>
        <img src={images.tjHeadshot} alt="Terrence Nolan Headshot" className={styles.image} />
        <h1 className={styles.name}><span className={styles.firstName}>Terrence</span> Nolan</h1>
      </header>
      <div className={styles.textContainer}>
        <span className={styles.position}><span className={styles.blueText}>CS</span> @ Villanova University</span>
        <span className={styles.text}>Expected Graduation: <span className={styles.blueText}>May 2024</span></span>
      </div>
    </div>
  )
}
