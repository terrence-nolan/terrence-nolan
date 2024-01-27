import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className={styles.aboutMain}>
            <div className={styles.card}>
                <h2>Terrence Nolan</h2>
                <h3>Student at Villanova University</h3>
                <h3>Expected Graduation: May 2024</h3>
            </div>
            <div className={styles.card}>
                <p>Outside of the classroom, I enjoy drawing, being active, and teaching myself how to play the guitar.
                    Some of my more active hobbies include playing soccer, rock climbing, and running.
                </p>
            </div>
        </main>
    );
}

export default AboutPage;
