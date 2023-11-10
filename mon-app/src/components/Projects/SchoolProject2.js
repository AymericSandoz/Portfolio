import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chessImg from "../../images/chess.png";
import moviesImg from "../../images/movies.png";
import asteroidListImg from "../../images/asteroidList.png";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDatabase,
  faLocationDot,
  faR,
} from "@fortawesome/free-solid-svg-icons";
function SchoolProject2() {
  return (
    <div className="school-projects">
      <div className="school-project-4">
        <img src={moviesImg} alt="Movies" />{" "}
        <div className="description">
          <a
            href="https://github.com/AymericSandoz/OpenClassrooms-P6"
            className="github-link" target="_blank"rel="noopener noreferrer"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description"> Basic Website </p>
          <p className="project-slack"> Html, Css, Js </p>
        </div>
      </div>

      <div className="school-project-5">
        <div>
          {" "}
          <img src={chessImg} className="contain" alt="Kanap" />{" "}
        </div>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/OpenClassrooms-P4"
            className="github-link" target="_blank"rel="noopener noreferrer"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Software program to manage chess tournaments
          </p>
          <p className="project-slack"> Python </p>
        </div>
      </div>
      <div className="school-project-6">
        <img src={asteroidListImg} alt="asteroid_list" />{" "}
        <div className="description">
          <a
            href="https://github.com/AymericSandoz/asteroid_list"
            className="github-link" target="_blank"rel="noopener noreferrer"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Application to list celestial bodies passing close to the earth
            during a given period.
          </p>
          <p className="project-slack"> Python, Django, Scss </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolProject2;
