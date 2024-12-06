import React from 'react';
import styles from "./ExperienceCard.module.css";
import { faLink, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillsList } from "../SkillsList/SkillsList";

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
    <li className={styles.cardContainer}>
      <div className={styles.card}>
        <header className={styles.dates}>
            {startDate} — {endDate}
        </header>
        <div className={styles.info}>
          <div className={styles.cardHeader}>
            <a
              href={companyLink}
              target={"_blank"}
              rel="noopener noreferrer"
              className={styles.companyLink}
              title={companyName}
            >
              <span className={styles.headerContainer}>
                <span className={styles.headerText}>{positionTitle} • {companyName}</span>
                <span className={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.arrowIcon} />
                </span>
              </span>
            </a>
            <span className={styles.locationText}>{companyLocation}</span>
          </div>
          <ul className={styles.descriptionList}>
            {description && description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          {links && linkText ?
            <ul className={styles.linksList}>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                  title={linkText}
                >
                  <div className={styles.linkItemContainer}>
                    <span key={index}><FontAwesomeIcon icon={faLink} /> {linkText}</span>
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
