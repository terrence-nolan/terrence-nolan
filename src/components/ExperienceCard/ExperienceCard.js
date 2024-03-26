import React from 'react';
import styles from "./ExperienceCard.module.css";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ExperienceCard = ({
                                   companyName,
                                   companyLocation,
                                   companyLink,
                                   positionTitle,
                                   startDate,
                                   endDate,
                                   description,
                                   links,
                                   linkText,
                                   skills,
}) => {

    return (
        <li className={styles.cardsDiv}>
            <a href={companyLink} target={"_blank"} rel="noopener noreferrer" className={styles.companyLink}>
                <div className={styles.card}>
                    <header className={styles.dates}>
                        {startDate} – {endDate}
                    </header>
                    <div className={styles.info}>
                        <div className={styles.cardHeader}>
                            <span className={styles.headerText}>{positionTitle} • {companyName}</span>
                            <span className={styles.locationText}>{companyLocation}</span>
                        </div>
                        <ul className={styles.descriptionList}>
                            {description.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                        {links && linkText ?
                            <ul className={styles.linksList}>
                                {links.map((link, index) => (
                                    <a href={link} className={styles.linkItem}>
                                        <div className={styles.linkItemContainer}>
                                            <span key={index}><FontAwesomeIcon icon={faLink} /> {linkText}</span>
                                        </div>
                                    </a>
                                ))}
                            </ul>
                            :
                            <></>
                        }
                        <ul className={styles.skillsList}>
                            {skills.map((skill, index) => (
                                <li key={index} className={styles.skillItem}>
                                    <div className={styles.skillItemContainer}>
                                        {skill}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </li>
    )
}