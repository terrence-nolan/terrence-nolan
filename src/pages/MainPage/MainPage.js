import React from 'react';
import styles from './MainPage.module.css';
import {SkillsAndTechSection} from "../../sections/SkillsAndTechSection/SkillsAndTechSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import {AboutSection} from "../../sections/AboutSection/AboutSection";
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";
import {BioSection} from "../../sections/BioSection/BioSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import useLocalStorage from "use-local-storage";
import {DarkModeToggle} from "../../components/DarkModeToggle/DarkModeToggle";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
        <main data-theme={isDark ? "dark" : "light"}>
            <div className={styles.mainContainer}>
                <DarkModeToggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                <div className={styles.aboutContainer}>
                    <AboutSection />
                    <SkillsAndTechSection />
                    <ConnectionLinks />
                </div>
                <div className={styles.pagesContainer}>
                    <BioSection />
                    <ExperienceSection />
                    <ProjectsSection />
                </div>
            </div>
            <Footer />
        </main>
    );
}
export default MainPage;
