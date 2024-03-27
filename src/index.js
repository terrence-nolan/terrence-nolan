import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from "./pages/AboutPage/AboutPage.module.css";
import {AboutSection} from "./pages/AboutSection/AboutSection";
import {SkillsAndTechSection} from "./pages/SkillsAndTechSection/SkillsAndTechSection";
import ConnectionLinks from "./components/ConnectionLinks/ConnectionLinks";
import {BioSection} from "./pages/BioSection/BioSection";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <main className={styles.mainContainer}>
        <div className={styles.aboutContainer}>
            <AboutSection />
            <SkillsAndTechSection />
            <ConnectionLinks />
        </div>
        <div className={styles.pagesContainer}>
            <BioSection />
            <ExperiencePage />
            <ProjectsPage />
        </div>
    </main>
);
