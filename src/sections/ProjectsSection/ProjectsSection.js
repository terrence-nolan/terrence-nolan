import React, {useEffect} from "react";
import styles from './ProjectsSection.module.css';
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";

const ProjectsSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | Projects";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    const punchcardSkills = ["React Native", "JavaScript", "CSS", "Expo Go", "Figma", "MongoDB", "Firebase"]
    const v1Skills = ["React.js", "JavaScript", "CSS", "Firebase"]

    return (
        <section className={styles.projectsMain}>
            <span className={styles.sectionTitle}>Projects</span>
            <div className={styles.underline}/>
            <ol className={styles.projectsList}>
                <ProjectCard
                    projectName={"Punchcard"}
                    projectLink={"https://punchcard.work"}
                    description={"Shift scheduling mobile application in which employees are able to build their own" +
                        " schedules through claiming, transferring, and dropping posted shifts. " +
                        "I designed and built the front end of the application."}
                    skills={punchcardSkills}
                />
                <ProjectCard
                    projectName={"terrencenolan.com V1"}
                    projectLink={"https://terrence-nolan-v1.vercel.app/"}
                    description={"The first version of my personal website."}
                    skills={v1Skills}
                />
            </ol>
        </section>
    );
}

export default ProjectsSection;
