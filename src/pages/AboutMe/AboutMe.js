import React from 'react';
import './AboutMe.css';
import Collapsible from 'react-collapsible';

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-left">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Hamza. I'm currently in the Software Engineering program at the University of Guelph.
                    I have a passion for technology, coding, and innovative solutions. I enjoy working on projects
                    that challenge my skills and allow me to grow as a developer.
                </p>
                <p>
                    This past summer, I had the opportunity to work as a research assistant under Professor Jennifer Ellis.
                    During this time, I played a key role in developing precision nutrition models, where I utilized Python
                    to code and streamline model structures. I also took on the challenge of revamping and updating the content
                    for the University of Guelph Center for Nutrition Modelling website using WordPress.
                </p>
                <p>
                    Looking ahead, I'm excited to start a new chapter this September as a Teaching Assistant for CIS*1500,
                    Introduction to Programming. I’m eager to help guide and support students as they begin their journey into
                    programming, sharing my knowledge and passion for coding with them.
                </p>
                <p>
                    Outside of my academic and professional life, I’m a big soccer fan, with FC Barcelona being my favorite club. Whether I'm playing or watching a match, soccer is something I enjoy and keep up with regularly.
                </p>
            </div>
            <div className="about-me-right">
                <Collapsible trigger="Education">
                    <div className="collapsible-content">
                        <p>University of Guelph - Bachelor of Computing, Software Engineering CO-OP (2023-2028)</p>
                        <ul>
                            <li>CIS*3250 - Software Design III</li>
                            <li>CIS*2430 - Object Oriented Programming</li>
                            <li>CIS*2520 - Data Structures</li>
                            <li>CIS*2030 - Microcomp</li>
                        </ul>
                    </div>
                </Collapsible>

                <Collapsible trigger="Clubs and Organizations">
                    <div className="collapsible-content">
                        <ul>
                            <li>MIT (Muslims In Tech) - Software Developer</li>
                            <li>GDSC (Guelph Developer Student Club) - Member</li>
                            <li>Guelph MSA (Muslim Student Association) - Member</li>
                        </ul>
                    </div>
                </Collapsible>

                <Collapsible trigger="Volunteer Work">
                    <div className="collapsible-content">
                        <ul>
                            <li>Donorg. - Executive Lead</li>
                            <li>Sporting Milton - Co-Founder</li>
                        </ul>
                    </div>
                </Collapsible>
            </div>
        </div>
    );
}

export default AboutMe;
