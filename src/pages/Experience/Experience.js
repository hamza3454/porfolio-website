import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className="experience-container">
            <div className="timeline">
                <div className="job-square job-1">
                    <h3>
                        <img src="/images/uofglogo.png" alt="Teaching Assistant Logo" />
                        Teaching Assistant
                    </h3>
                    <p className="employer">University of Guelph</p>
                    <p>CIS*1500 - Introduction to Programming...</p>
                    <p className="date">September 2024 - December 2024</p>
                </div>
                <div className="job-square job-2">
                    <h3>
                        <img src="/images/uofglogo.png" alt="Research Assistant Logo" />
                        Research Assistant
                    </h3>
                    <p className="employer">University of Guelph</p>
                    <p>➡ Assisted in the development of precision nutrition models, utilizing Python for coding and streamlining model structures</p>
                    <p>➡ Utilized WordPress software to revamp and update content for the University of Guelph Center for
                        Nutrition Modelling website</p>
                    <p>➡ Integrated API solutions using multiple endpoints to retrieve and process feed data from MadBarn’s web
                        services</p>

                    <p className="date">May 2024 - August 2024</p>
                </div>
                {/* Add more job squares as needed */}
            </div>
        </div>
    );
}

export default Experience;

