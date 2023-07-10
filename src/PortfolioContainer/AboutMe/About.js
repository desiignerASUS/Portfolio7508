import React from 'react';
import "./About.css";
import profilePic from "../../assets/Prabhat_Jain.jpg"

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p className='why'>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                    Motivated and enthusiastic software engineering graduate with a strong passion for quality assurance and test automation. Solid foundation in software testing concepts and methodologies, combined with hands on experience in creating and executing test cases. eager to apply technical skills in building robust test automation frameworks. Excellent team player with effective communication and problem-solving abilities.
                    </div>
                    <div className='nnn'>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li>Software Development Engineer in Test</li>
                            <li>600+ Hours of Manual + Automation</li>
                            <li>200+ Hours of DSA</li>
                            <li>8+ Project</li>        
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a href="https://drive.google.com/file/d/1TxkgZX6olkgNpFTTZj0xzg37U4rlDlB1/view?usp=sharing" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
