import React from 'react';
import styles from './BioSection.module.css';

export const BioSection = () => {
    return (
        <section className={styles.bioContainer}>
            <span className={styles.sectionTitle}>About Me</span>
            <div className={styles.underline} />
            <p className={styles.text}>
                Hi, my name is TJ. I just graduated from college and I'm currently working my
                first adult job as a software engineer for 5 Stones.
                <br />
                <br />
                Outside of programming, I enjoy carrying out my imaginative designs in a more
                analog fashion through drawing. I also enjoy running (I just recently completed my
                first half marathon), playing soccer, and teaching myself the acoustic guitar.
            </p>
        </section>
    )
}