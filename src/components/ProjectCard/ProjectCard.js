import React from 'react';
import styles from "./ProjectCard.module.css";
import {faLink, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SkillsList} from "../SkillsList/SkillsList";

export const ProjectCard = ({
                                   projectName,
                                   projectLink,
                                   description,
                                   otherLinks,
                                   otherLinksText,
                                   skills,
                               }) => {

    return (
        <li className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.info}>
                    <div className={styles.cardHeader}>
                        <a href={projectLink} target={"_blank"} rel="noopener noreferrer" className={styles.projectLink}>
                            <span className={styles.headerContainer}>
                                <span className={styles.headerText}>{projectName}</span>
                                <span className={styles.arrowIconContainer}>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.arrowIcon} />
                                </span>
                            </span>
                        </a>
                    </div>
                    <p className={styles.description}>
                        {description}
                    </p>
                    {otherLinks && otherLinksText ?
                        <ul className={styles.linksList}>
                            {otherLinks.map((link, index) => (
                                <a href={link} className={styles.linkItem}>
                                    <div className={styles.linkItemContainer}>
                                        <span key={index}><FontAwesomeIcon icon={faLink} /> {otherLinksText}</span>
                                    </div>
                                </a>
                            ))}
                        </ul>
                        :
                        <></>
                    }
                    <SkillsList skills={skills} />
                </div>
            </div>
        </li>
    )
}