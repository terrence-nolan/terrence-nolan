import React from "react";
import styles from './ExperienceSection.module.css';
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";

const ExperienceSection = () => {

  const fiveStonesDescription = [
    "Rebuilt the video player component on the Annunciate app to allow for proper fullscreen and rotations on both mobile and tablet devices.",
    "Overhauled the content search functionality in Annunciate to provide users with an efficient experience in searching for desired content.",
  ];
  const fiveStonesSkills = ["TypeScript", "React", "React Native", "Docker", "SQL", "Elastic Search", "React Admin"];

  const chewyDescription1 = [
    "Extracted the My Pet Health page UI from microsite framework and implemented it into a Single Page Application which resulted in performance increase of 160% according to Google Lighthouse.",
    "Deployment of the SPA generated $14k in annual savings through the elimination of an unnecessary AWS Elastic Kubernetes Service instance.",
    "Enhanced user experience through improvement of HTML accessibility and incorporation of company design system.",
    "Gained experience working in an agile workflow system of sprints and epics.",
    "Initiated discussions with members of the product team to discuss certain design ideas and suggest additional capabilities for the page and its components.",
  ];
  const chewySkills1 = ["React", "TypeScript", "HTML", "SCSS", "Jest", "Docker", "Jenkins"];

  const augustinianDescription = [
    "Redesigned the appearance of the Institute of Augustine Spirituality website and transferred the site from from Joomla to Wix in English, Italian, and Spanish.",
    "Built a front-end UI for a database solution to store information about Augustinian schools and churches.",
  ];
  const augustinianSkills = ["Wix", "JavaScript", "HTML", "CSS", "Excel"];

  const massportDescription = [
    "Constructed a SnapLogic pipeline to transfer 100% of non-empty tables in the company's Oracle Databases into Snowflake Cloud Databases.",
    "Creation of the pipeline was integral to company's ability to manipulate and present gathered data.",
    "Built interactive dashboards using select network vulnerability data on Tableau with importance to cybersecurity team.",
  ];
  const massportSkills = ["SnapLogic", "Tableau", "Snowflake", "SQL"];

  return (
    <section className={styles.experienceMain}>
      <span className={styles.sectionTitle}>Experience</span>
      <div className={styles.underline} />
      <ol className={styles.experienceList}>
        <ExperienceCard
          companyName={"Chewy"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.chewy.com/"}
          startDate={"DEC 2024"}
          endDate={"PRESENT"}
          positionTitle={"Software Engineer I"}
        />
        <ExperienceCard
          companyName={"5 Stones"}
          companyLocation={"Remote"}
          companyLink={"https://www.weare5stones.com"}
          startDate={"JUL 2024"}
          endDate={"NOV 2024"}
          links={["https://www.annunciate.io/"]}
          linkText={["Annunciate Info Page"]}
          positionTitle={"Software Engineer I"}
          description={fiveStonesDescription}
          skills={fiveStonesSkills}
        />
        <ExperienceCard
          companyName={"Chewy"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.chewy.com/"}
          startDate={"JUN 2023"}
          endDate={"AUG 2023"}
          positionTitle={"Software Engineering Intern"}
          description={chewyDescription1}
          links={["https://www.chewy.com/pethealth/"]}
          linkText={["My Pet Health"]}
          skills={chewySkills1}
        />
        <ExperienceCard
          companyName={"Roman Augustinian Curia"}
          companyLocation={"Rome, Italy"}
          companyLink={"https://www.augustinianorder.org/"}
          startDate={"FEB 2023"}
          endDate={"MAY 2023"}
          positionTitle={"Software Development Intern"}
          description={augustinianDescription}
          skills={augustinianSkills}
        />
        <ExperienceCard
          companyName={"Massachusetts Port Authority"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.massport.com/"}
          startDate={"JUN 2022"}
          endDate={"AUG 2022"}
          positionTitle={"Technical Assistant Intern"}
          description={massportDescription}
          skills={massportSkills}
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
