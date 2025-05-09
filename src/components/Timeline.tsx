import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <>
      <div id="education">
        <div className="items-container">
          <h1>Education</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2025"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Bachelor Of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">MIT Academy Of Engineering, Alandi.</h4>
              <p>
                Pursuing B.Tech in Computer Engineering with CGPA 8.4
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2022"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Diploma in Information Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Government Polytechnic, Pune</h4>
              <p>
                Completed Diploma in Information Technology with 89.33 %
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">SSC</h3>
              <h4 className="vertical-timeline-element-subtitle">Mr. Vinayakrao Patil Highschool, Parite</h4>
              <p>
                Completed SSC with 85.20%
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>


      <div id="experience">
        <div className="items-container">
          <h1>Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2025 - Present"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">SDE Intern @Amadeus</h3>
              <h4 className="vertical-timeline-element-subtitle">Banglore, India</h4>
              <p>
                Scraping, Data Analysis, Data Visualization, Deployment, API Development, Grafana, Prometheus
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2024 - Dec 2024"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">MEARN Stack Development Intern @Techonsy</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Full-stack Development, API Development, User Experience, LLM Integration, Gen AI 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2023 - Aug 2023"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">MERN Stack Developer @Website Vikreta</h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                Code, Test, Deploy and Maintain.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Timeline;