import React, {useEffect} from "react";
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | Projects";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    return (
        <main className={styles.projectsMain}>
            <h1>Coming Soon!</h1>
        </main>
    );
}

export default ProjectsPage;
