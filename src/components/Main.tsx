import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Button from '@mui/material/Button';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/65166449?v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/prasaddhobale" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prasad-dhobale/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prasad Dhobale</h1>
          <p>Full Stack Developer</p>
          <Button variant="contained">
            <a href="https://drive.google.com/file/d/1jR9DZH34LtukiLgRJ1Xp5sMm1NpsVXvn/view">Hire Me !</a>
          </Button>
          <div className="mobile_social_icons">
            <a href="https://github.com/prasaddhobale" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prasad-dhobale/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;