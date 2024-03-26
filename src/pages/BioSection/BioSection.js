import React from 'react';
import styles from './BioSection.module.css';

export const BioSection = () => {
    return(
        <section className={styles.bioContainer}>
            <p className={styles.text}>I am a senior CS student looking for a full time SWE role,
                with a budding passion for front-end engineering.</p>
            <span className={styles.text}><span className={styles.blueText}>Elective Coursework:</span> Applied Machine Learning, Computer Graphics,
                            Overview of Cybersecurity</span>
        </section>
    )
}