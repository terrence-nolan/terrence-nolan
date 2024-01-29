import React, {useEffect} from "react";
import styles from './ProjectsPage.module.css';
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";

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
            <div style={{flex: 1}}/>
            <h1>Coming Soon!</h1>
            <div style={{flex: 1}}/>
            <ConnectionLinks />
        </main>
    );
}

export default ProjectsPage;
