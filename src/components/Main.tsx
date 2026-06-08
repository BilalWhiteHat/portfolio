import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avater from '../assets/images/avater.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src={avater}/> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/BilalWhiteHat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammadbilalkhan4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Muahmmad Bilal Khan</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/BilalWhiteHat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammadbilalkhan4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;