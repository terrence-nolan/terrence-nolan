import React, {useEffect} from "react";
import styles from './ExperiencePage.module.css';
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";
import {ExperienceCard} from "../../components/ExperienceCard/ExperienceCard";

const ExperiencePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | Experience";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    const chewyDescription = [
        "Extracted the My Pet Health page UI from microsite framework and implemented it into a SPA which resulted in performance increase of 160% in Google Lighthouse.",
        "Deployment of the SPA generated savings of $14k annually through the elimination of an unnecessary EKS instance.",
        "Enhanced user experience through improvement of HTML accessibility and incorporation of company design system.",
        "Gained experience working in an agile workflow system of sprints.",
        "Initiated discussions with members of the product team to discuss certain design ideas and suggest additional capabilities for the page and its components."
    ];

    const chewySkills = ["React", "TypeScript", "Jest", "Docker", "Jenkins"];

    const augustinianDescription = [
        "Redesigned the appearance of the Institute of Augustine Spirituality website and transferred the site from from Joomla to Wix in English, Italian, and Spanish.",
        "Built a front-end UI for a database solution to store information about Augustinian schools and churches."
    ]

    const augustinianSkills = ["Wix", "JavaScript", "HTML", "CSS", "Excel"]

    const massportDescription = [
        "Constructed a SnapLogic pipeline to transfer 100% of non-empty tables in the company's Oracle Databases into Snowflake Cloud Databases.",
        "Creation of the pipeline was integral to company's ability to manipulate and present gathered data.",
        "Built interactive dashboards using select network vulnerability data on Tableau with importance to cybersecurity team."
    ]

    const massportSkills = ["SnapLogic", "Tableau", "Snowflake", "SQL"]

    return (
        <main className={styles.expMain}>
            <ol>
                <ExperienceCard
                    companyName={"Chewy, Inc."}
                    companyLocation={"Boston, MA"}
                    companyLink={"https://www.chewy.com/"}
                    startDate={"JUN 2024"}
                    endDate={"AUG 2024"}
                    positionTitle={"Software Engineering Intern"}
                    description={chewyDescription}
                    links={["https://www.chewy.com/pethealth/"]}
                    linkText={["My Pet Health"]}
                    skills={chewySkills}
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
            <ConnectionLinks />
        </main>
    );
}

export default ExperiencePage;
