import React from 'react';
import styles from './BioSection.module.css';

export const BioSection = () => {
  return (
    <section className={styles.bioContainer}>
      <span className={styles.sectionTitle}>About Me</span>
      <div className={styles.underline} />
      <p className={styles.text}>
        Hi, my name is TJ. I am currently working as a software engineer in Boston for Chewy.
        <br />
        <br />
        Outside of programming, I enjoy carrying out my imaginative designs in a more
        analog fashion through drawing. I also enjoy running, playing soccer, and teaching myself the acoustic guitar.
      </p>
    </section>
  )
}
