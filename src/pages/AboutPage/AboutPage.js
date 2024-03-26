import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import images from "../../images/images";
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | Home";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    return (
        <main className={styles.aboutMain}>
            <div className={styles.introSection}>
                <img src={images.tjPortrait} alt="Terrence Nolan Portrait" className={styles.image} />
                <div className={styles.card}>
                    <h2><strong>Terrence Nolan</strong></h2>
                    <h5>Computer Science @ Villanova University</h5>
                    <h5>Expected Graduation: May 2024</h5>
                    <h6>Elective Coursework: Applied Machine Learning, Computer Graphics, Overview of Cybersecurity</h6>
                    <p>I am a senior CS student looking for a full time SWE role, with a budding passion for front-end engineering.</p>
                </div>
            </div>
            <div className={styles.mainCardsContainer}>
                <div className={styles.skillsAndTech}>
                    <div className={styles.card}>
                        <h4>Languages</h4>
                        <p>
                            Javascript<br/>
                            Java<br/>
                            Python<br/>
                            Typescript<br/>
                            SQL<br />
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4>Technologies</h4>
                        <p>
                            React.js<br/>
                            React Native<br/>
                            Expo Go<br/>
                            Jest<br/>
                            Firebase<br/>
                            Jupyter Notebook<br/>
                            Figma<br/>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
