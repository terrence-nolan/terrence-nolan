import React from "react";
import styles from './ProjectsSection.module.css';
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";

const ProjectsSection = () => {

    const punchcardSkills = ["React Native", "JavaScript", "CSS", "Expo Go", "Figma", "MongoDB", "Firebase"]
    const v1Skills = ["React.js", "JavaScript", "CSS", "Firebase", "Vercel"]

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
                    description={"The first version of my personal website. " +
                        "Built with React and CSS. Originally hosted on Firebase. Now hosted on Vercel."}
                    skills={v1Skills}
                />
            </ol>
        </section>
    );
}

export default ProjectsSection;
