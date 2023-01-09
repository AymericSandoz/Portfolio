import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spikebetImg from "../../images/spikebet.png";
import spikedexImg from "../../images/spikedex.png";
import ohmyfoodImg from "../../images/ohmyfood.png";
import laPanthereImg from "../../images/laPanthere.png";
import P7img from "../../images/P7_img1.jpg";
import P2Img from "../../images/P2.png";
import P5Img from "../../images/P5_img.PNG";
import P6Img from "../../images/P6_img.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDatabase,
  faLocationDot,
  faR,
} from "@fortawesome/free-solid-svg-icons";
function SchoolProject() {
  return (
    <div className="school-projects">
      <div className="school-project-1">
        <div>
          {" "}
          <img src={P7img} className="contain" alt="groupomania" />{" "}
        </div>
        <div className="description">
          <a
            href="https://github.com/AymericSandoz/Open_Classroom_P7"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            Creation of a corporate social network
          </p>
          <p className="project-slack">
            Node JS, Mongo DB, Express, React, Html, Css, Sass{" "}
          </p>
        </div>
      </div>

      <div className="school-project-2">
        <div>
          {" "}
          <img src={P6Img} alt="Hot Takes" />{" "}
        </div>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/Open_Classroom_P6"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description"> Building a secure API </p>
          <p className="project-slack">Node JS, Mongo DB, Express </p>
        </div>
      </div>

      <div className="school-project-3">
        <a href="https://aymericsandoz.github.io/Open_classroom_Projects/index.html">
          {" "}
          <img src={ohmyfoodImg} alt="Ohmyfood restaurant" />{" "}
        </a>

        <div className="description">
          <a
            href="https://aymericsandoz.github.io/Open_classroom_Projects/index.html"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Website that lists gourmet restaurant menus
          </p>
          <p className="project-slack">Html, Css, Sass </p>
        </div>
      </div>

      <div className="school-project-4">
        <a href="https://aymericsandoz.github.io/Projet_4_Open_Classrooms/index">
          {" "}
          <img src={laPanthereImg} alt="La panthere" />{" "}
        </a>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/Projet_4_Open_Classrooms"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description"> SEO Optimisation </p>
          <p className="project-slack"> Html, Css </p>
        </div>
      </div>

      <div className="school-project-5">
        <div>
          {" "}
          <img src={P5Img} className="contain" alt="Kanap" />{" "}
        </div>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/P5_Open_Classroom_Aymeric_Sandoz"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Building a custom ecommerce website
          </p>
          <p className="project-slack"> Javascript </p>
        </div>
      </div>
      <div className="school-project-6">
        <a href="https://aymericsandoz.github.io/projet_2_OpenSclassrooms/">
          {" "}
          <img src={P2Img} alt="booki" />{" "}
        </a>

        <div className="description">
          <a
            href="https://github.com/AymericSandoz/projet_2_OpenSclassrooms"
            className="github-link"
          >
            {" "}
            CODE <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <p className="project-description">
            {" "}
            Simple website using Html and Css
          </p>
          <p className="project-slack"> Html, Css </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolProject;
