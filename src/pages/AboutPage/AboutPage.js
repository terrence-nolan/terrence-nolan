import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import images from "../../images/images";
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";
import {SkillsAndTechPage} from "../SkillsAndTechPage/SkillsAndTechPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | Home";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    return (
        <main className={styles.mainContainer}>
            <div className={styles.aboutContainer}>
                <div className={styles.introContainer}>
                    <header className={styles.photoAndName}>
                        <img src={images.tjPortrait} alt="Terrence Nolan Portrait" className={styles.image} />
                        <h1 className={styles.name}><strong className={styles.firstName}>Terrence</strong> Nolan</h1>
                    </header>
                    <div className={styles.textContainer}>
                        <span className={styles.position}>CS @ Villanova University</span>
                        <span className={styles.text}>Expected Graduation: May 2024</span>
                        <p className={styles.text}>I am a senior CS student looking for a full time SWE role,
                            with a budding passion for front-end engineering.</p>
                        <span className={styles.text}>Elective Coursework: Applied Machine Learning, Computer Graphics,
                        Overview of Cybersecurity</span>
                    </div>
                </div>
                <SkillsAndTechPage />
            </div>
            <div className={styles.pagesContainer}>
                <ExperiencePage />
            </div>
        </main>
    );
}

export default AboutPage;
