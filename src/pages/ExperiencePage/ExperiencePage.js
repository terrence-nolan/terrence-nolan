import React from "react";
import './styles.css';
import images from '../../images/images';

const ExperiencePage = () => {

    return (
        <main className="expMain">
            <div className="cardsDiv">
                <div className="card">
                    <div className="cardTop">
                        <h2 className="leftText"><b>Chewy</b></h2>
                        <div className="flexSpacer" />
                        <h2 className="rightText"><b>Boston, MA</b></h2>
                    </div>
                    <div className="cardTop">
                        <h4 className="leftText"><i>Software Engineering Intern</i></h4>
                        <div className="flexSpacer" />
                        <h4 className="rightText"><i>Summer 2023</i></h4>
                    </div>
                    <ul className="list">
                        <li>Extracted the My Pet Health page UI from microsite framework and implemented it into a SPA which resulted in performance increase of 160% in Google Lighthouse</li>
                        <li>Deployment of the SPA generated savings of $14k annually through the elimination of an unnecessary EKS instance</li>
                        <li>Enhanced user experience through improvement of HTML accessibility and incorporation of company design system</li>
                        <li>Tools used in the completion of the project included React, TypeScript, Jest, Docker, and Jenkins</li>
                        <li>Gained experience working in an agile workflow system of sprints</li>
                        <li>Initiated discussions with members of the product team to discuss certain design ideas and suggest additional capabilities for the page and its components</li>
                    </ul>
                </div>
                <img src={images.chewyPresentation} alt="Terrence Nolan presenting at his internship" className="image" />
            </div>
            <div className="card">
                <div className="cardTop">
                    <h2 className="leftText"><b>Roman Augustinian Curia</b></h2>
                    <div className="flexSpacer" />
                    <h2 className="rightText"><b>Rome, Italy</b></h2>
                </div>
                <div className="cardTop">
                    <h4 className="leftText"><i>Software Development Intern</i></h4>
                    <div className="flexSpacer" />
                    <h4 className="rightText"><i>Spring 2023</i></h4>
                </div>
                <ul className="list">
                    <li>Redesigned the appearance of the Institute of Augustine Spirituality website and transferred it from Joomla to Wix</li>
                    <li>Built a front-end UI for a database solution to store information about Augustinian schools and churches</li>
                </ul>
            </div>
            <div className="card">
                <div className="cardTop">
                    <h2 className="leftText"><b>Massachusetts Port Authority</b></h2>
                    <div className="flexSpacer" />
                    <h2 className="rightText"><b>Boston, MA</b></h2>
                </div>
                <div className="cardTop">
                    <h4 className="leftText"><i>Technical Assistant Intern</i></h4>
                    <div className="flexSpacer" />
                    <h4 className="rightText"><i>Summer 2023</i></h4>
                </div>
                <ul className="list">
                    <li>Constructed a SnapLogic pipeline to transfer 100% of non-empty tables in the company's Oracle Databases into Snowflake Cloud Databases</li>
                    <li>Creation of the pipeline was integral to company's ability to manipulate and present gathered data</li>
                    <li>Built interactive dashboards using select network vulnerability data on Tableau with importance to cybersecurity team</li>
                </ul>
            </div>
        </main>
    );
}

export default ExperiencePage;
