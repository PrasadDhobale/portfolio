import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/PrasadDhobale/ResumeRanker-Backend" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PrasadDhobale/ResumeRanker-Backend" target="_blank" rel="noreferrer"><h2>Resume Ranking using LLM</h2></a>
                <p>Developed Resume Ranking System for Recruiter and Job Seekers using React, and Django.</p>
            </div>
            <div className="project">
                <a href="http://internship.compwallah.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://internship.compwallah.com/" target="_blank" rel="noreferrer"><h2>Internship Co-Ordination Portal</h2></a>
                <p>Designed, developed, and deployed Internship co-ordination portal to track and monitor interns progress using PHP and MySQL.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Smart Online Examination Platform</h2></a>
                <p>Developed Smart Online Examination Platform to smoothen the Exam of Students tracked by respective Teachers using Servlet, JSP, JSTL, MYSQL.</p>
            </div>
            <div className="project">
                <a href="http://aai.compwallah.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://aai.compwallah.com/" target="_blank" rel="noreferrer"><h2>Electronic Airport Entry Pass (EAEP)</h2></a>
                <p>Designed, Developed and Deployed Entry System with 4 stage verification and tracking the request by phone number using PHP, MySQL.</p>
            </div>
            <div className="project">
                <a href="http://museum.compwallah.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://museum.compwallah.com/" target="_blank" rel="noreferrer"><h2>TicketLess Entry Pass for Museum</h2></a>
                <p>This Portal will allow user to book ticket after booking he will get the QR code, and the further procedure will be tracked by QR Code.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;