import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spikebetImg from "../../images/spikebet.png";
import spikedexImg from "../../images/spikedex.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDatabase,
  faLocationDot,
  faR,
} from "@fortawesome/free-solid-svg-icons";
function PersonnalProject() {
  return (
    <div className="personnal-projects">
      <div className="personnal-project-1">
        <a href="https://spikebet.herokuapp.com/">
          {" "}
          <img src={spikebetImg} alt="spikebet" />{" "}
        </a>
        <div className="description">
          <a
            href="https://github.com/AymericSandoz/spikebet"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            Sports betting app developed in partnership with Roundnet Paris -
            Beta version
          </p>
        </div>
        <p className="project-slack">
          Html, Css, Sass, React, Mongo Db, Express, Node Js{" "}
        </p>
      </div>

      <div className="personnal-project-2">
        <a href="https://spikedex-heroku.herokuapp.com/">
          {" "}
          <img src={spikedexImg} alt="spikedex" />{" "}
        </a>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/spikedexV3/tree/master"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Card collection game developed in partnership with Roundnet Paris -
            Beta versions{" "}
          </p>
          <p className="project-slack">
            Html, Css, Javascript, Mongo Db, Express, Node Js{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonnalProject;
