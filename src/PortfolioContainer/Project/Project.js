import "./Project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import html5 from "../../assets/JiraIcon.jpg";
import css3 from "../../assets/XmindIcon.jpeg";
import js from "../../assets/icons8-javascript-144.png";
import penitanteCave from "../../assets/Kar_tour.png";
import restAssured from "../../assets/RestAssured.png";
import postman from "../../assets/postman-icon.png";
import cypress from "../../assets/cypressIcon.jpeg";
import githubAPI from "../../assets/GithubAPI.png";
import appium from "../../assets/appiumlogo.jpg";
import androidStudio from "../../assets/Android-studio-logo-1.png";
import java from "../../assets/Java-Icon.png";
import banjaraRide from "../../assets/LifeStyle_Store.png";





export default function Project() {
  return (
    <div className="project-container" id="Projects">
      <div className="project-header">
        <h3>Projects</h3>
        <p className="why">Tech Stack and Projects</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="projectDetails">
        <div className="projectCard">
          <div className="project-card">
            <div className="projectName">
              <h3>Karnatka Tourism (Selenium-Framework)</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={penitanteCave} alt="err" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                In this Project, I explored the site manually and creat test cases for the same also automated the application using selenium framewoek provided by Instructor. we use TestNG framework for assertions. 
              </div>
              <div className="techStack">
                <img src={html5} />
                <img src={css3} />
                {/* <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" /> */}
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/masai-sdet/Prabhat_fw20_1281/tree/master/SDET/Selenium-Project/final-framework-testng"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>GitHub API Testing</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={githubAPI} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
              Tested all API requests of github with cypress,rest assured with Cucumber(BDD) and postman. Creating repo + autolink, Deleting repo + autolink, Daily scrum meetings with team, Rest Assured and Cypress implemented with framework.
               {/* Areas of Responsibility: Creating repo + autolink, Deleting repo + autolink, Daily scrum meetings with team, Rest Assured and Cypress implemented with framework. */}
              </div>
              <div className="techStack">
                <img src={restAssured} />
                <img src={postman} />
                <img src={cypress} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/masai-sdet/Prabhat_fw20_1281/tree/master/SDET/API-testing-Project"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                {/* <a
                  className="projectbtn2"
                  href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a> */}
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>LifeStyle Store(E-Commerce)</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={banjaraRide} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
              Tested the lifeStyle_store e-commerce application with selenium (E2E-Testing). Automated SignUP/login functionality also added few item to card then moving ahed tested the 'Add to Cart' and so on.
              </div>
              <div className="techStack">
                <img src={appium} />
                <img src={androidStudio} />
                <img src={java} />

              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/masai-sdet/Prabhat_fw20_1281/tree/master/SDET/Cypress-Project"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                {/* <a
                  className="projectbtn2"
                  href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="project-card">
            
        </div>
        <div className="project-card">
            hello
        </div> */}
        </div>
      </div>
    </div>
  );
}
