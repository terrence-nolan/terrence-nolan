import React from 'react';
import styles from './SkillsAndTechSection.module.css';
import {SkillsList} from "../../components/SkillsList/SkillsList";

export const SkillsAndTechSection = () => {
  const languages = ["JavaScript", "TypeScript", "Java", "Python", "HTML/CSS", "SQL"]
  const toolsAndFrameworks = ["React.js", "React Native", "Expo Go", "Jest", "Git", "Jupyter Notebook", "Firebase", "Docker", "Jenkins", "Figma"]

  return (
    <main className={styles.sectionContainer}>
      <div className={styles.subsectionContainer}>
        <span className={styles.title}>Languages</span>
        <SkillsList skills={languages} />
      </div>
      <div className={styles.subsectionContainer}>
        <span className={styles.title}>Tools and Frameworks</span>
        <SkillsList skills={toolsAndFrameworks} />
      </div>
    </main>
  )
}
