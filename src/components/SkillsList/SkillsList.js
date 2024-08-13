import React from 'react';
import styles from './SkillsList.module.css';

export const SkillsList = ({skills}) => {
  return (
    <ul className={styles.skillsList}>
      {skills.map((skill, index) => (
        <li key={index} className={styles.skillItem}>
          <div className={styles.skillItemContainer}>
            {skill}
          </div>
        </li>
      ))}
    </ul>
  )
}
