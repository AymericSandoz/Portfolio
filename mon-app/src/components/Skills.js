import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFontAwesomeFlag,
  faGithub,
  faHtml5,
  faLinkedin,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDatabase,
  faLocationDot,
  faR,
} from "@fortawesome/free-solid-svg-icons";
import cssLogo from "../images/css-logo.png";
import reactLogo from "../images/react-logo.png";
import htmlLogo from "../images/html-logo.png";
import nodeJsLogo from "../images/nodeJs-logo.png";
import mongoLogo from "../images/mongo-logo.png";
import herokuLogo from "../images/heroku-logo.png";
import sassLogo from "../images/sass-logo.png";
import githubLogo from "../images/github-logo.png";
import RLogo from "../images/R-logo.png";
import expressLogo from "../images/express-logo.png";
import jsLogo from "../images/js-logo.png";
import jQueryLogo from "../images/jQueryLogo.png";
import pythonLogo from "../images/python.png";
import JDangoPythonLogo from "../images/django-python-logo.png";

function Skills() {
  return (
    <div className="skills-part">
      <h3> Hard skills</h3>
      <div className="skills-contenair">
        <div className="skills n2">
          <h3>Back-End</h3>
          <div className="slack-container ">
            <img src={JDangoPythonLogo} alt="logo django python" />
            <img src={nodeJsLogo} alt="node js css" />
            <img src={expressLogo} alt="logo express" />
          </div>
          <p className="skill-description">
            Able to create secure API using Node and express.
          </p>
        </div>

        <div className="skills n4">
          <h3>Basics</h3>
          <div className="slack-container ">
            <img src={htmlLogo} alt="logo html" />
            <img src={cssLogo} alt="logo css" />
            <img src={jsLogo} alt="logo js" />
            <img src={sassLogo} className="sass-logo" alt="logo sass" />
          </div>
          <p className="skill-description">
            Able to create beautiful sites with responsive design using Html,
            Css, Sass and JS.{" "}
          </p>
        </div>
        <div className="skills n1">
          <h3>Database</h3>
          <div className="slack-container">
            <img src={mongoLogo} className="mongoDB-logo" alt="logo mongo db" />
          </div>

          <p className="skill-description ">
            {" "}
            CRUD operations. Able to create, read, update, and delete documents
            using MongoDB.
          </p>
        </div>
        <div className="skills n1">
          <h3>Front-end Framework</h3>
          <div className="slack-container">
            <img src={jQueryLogo} alt="jQuery js" />
            <img src={reactLogo} alt="logo react" />{" "}
          </div>
          <p className="skill-description">
            Able to create beautiful user interfaces with react.
          </p>
        </div>
        <div className="skills n1">
          <h3>Cloud</h3>
          <div className="slack-container">
            <img src={herokuLogo} alt="logo heroku" />
          </div>
          <p className="skill-description">
            {" "}
            Able to build, run, and operate applications in the cloud with
            heroku.
          </p>
        </div>
        <div className="skills n1">
          <h3>Other</h3>
          <div className="slack-container">
            <img src={RLogo} alt="logo R" />
            <img src={pythonLogo} alt="logo python" />
          </div>
          <p className="skill-description">
            {" "}
            Data analysis and graphics represention with R.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

{
  /* <div className="skills-part">
      <h3>Skills</h3>
      <div className="skills-contenair">
        <div className="skills">
          {" "}
          <img src={reactLogo} alt="logo css" /> <p>React</p>
        </div>
        <div className="skills">
          {" "}
          <img src={mongoLogo} alt="logo mongo db" />
          <p> Mongo db</p>
        </div>
        <div className="skills">
          {" "}
          <img src={nodeJsLogo} alt="node js css" /> <p>Node js</p>
        </div>
        <div className="skills">
          {" "}
          <img src={expressLogo} alt="logo express" /> <p>Express</p>
        </div>
        <div className="skills">
          <img src={htmlLogo} alt="logo html" /> <p>Html5</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="logo css" /> <p>Css</p>
        </div>
        <div className="skills">
          {" "}
          <img src={sassLogo} alt="logo sass" /> <p>Sass</p>
        </div>
        <div className="skills">
          {" "}
          <img src={githubLogo} alt="logo github" /> <p>Github</p>
        </div>
        <div className="skills">
          {" "}
          <img src={RLogo} alt="logo R" /> <p>R</p>
        </div>
        <div className="skills">
          {" "}
          <img src={herokuLogo} alt="logo heroku" />
          <p> Heroku</p>
        </div>
      </div>
    </div> */
}
