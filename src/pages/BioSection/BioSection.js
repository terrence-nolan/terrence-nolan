import React from 'react';
import styles from './BioSection.module.css';

export const BioSection = () => {
    return(
        <section className={styles.bioContainer}>
            <p className={styles.text}>Hi, my name is Terrence Nolan. I am a senior CS student looking for a
                full time SWE role, with a budding passion for front-end engineering and building
                aesthetic projects.</p>
            <p className={styles.text}>Outside of programming, I enjoy carrying out my imaginative designs in a more
                analog fashion through drawing and painting. I also enjoy running (I just recently completed my
                first half marathon), playing soccer, and teaching myself the acoustic guitar.</p>
            <span className={styles.text}><span className={styles.blueText}>Elective Coursework:</span> Applied Machine Learning, Computer Graphics,
                            Overview of Cybersecurity</span>
        </section>
    )
}