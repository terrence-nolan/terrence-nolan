import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import {SkillsAndTechPage} from "../SkillsAndTechPage/SkillsAndTechPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import {AboutSection} from "../AboutSection/AboutSection";

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
                <AboutSection />
                <SkillsAndTechPage />
            </div>
            <div className={styles.pagesContainer}>
                <ExperiencePage />
            </div>
        </main>
    );
}

export default AboutPage;
