import React, { useState } from "react";
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
import SchoolProject from "./SchoolProject";
import PersonnalProject from "./PersonnalProject";
import { useLocation } from "react-router-dom";

function Project() {
  const [projectType, setProjectType] = useState("personnal");
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="bar-container">
        <div
          className={
            projectType == "personnal" ? "bar bar-1 active-bar" : "bar bar-1"
          }
          onClick={() => setProjectType("personnal")}
        >
          {" "}
          <p>Personnal</p>
        </div>
        <div
          className={
            projectType == "school" ? "bar bar-2 active-bar" : "bar bar-2"
          }
          onClick={() => setProjectType("school")}
        >
          {" "}
          <p>School</p>
        </div>
      </div>
      {projectType == "personnal" && <PersonnalProject />}
      {projectType == "school" && <SchoolProject />}
    </div>
  );
}

export default Project;
