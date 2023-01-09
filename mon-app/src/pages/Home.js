import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFontAwesomeFlag,
  faGithub,
  faHtml5,
  faLinkedin,
  faNodeJs,
  faPagelines,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDatabase,
  faLocationDot,
  faR,
} from "@fortawesome/free-solid-svg-icons";
import Navbars from "../components/Navbar";
import profilImage from "../images/photo-profil.jpg";
import Skills from "../components/Skills.js";
import Project from "../components/Projects/Projects";
import { useLocation } from "react-router-dom";
function Home() {
  let rightBottomSide = "skills";
  const [hiddenPart, setHiddenPart] = useState("1");
  //const [rightBottomSide, setRightBottomSide] = useState();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  if (query.get("right_bottom_side") != null)
    rightBottomSide = query.get("right_bottom_side");
  console.log(rightBottomSide);
  return (
    <div className="presentation">
      <div className="left-side-presentation">
        <img src={profilImage} alt="photo de profil" />
        <div className="name">
          <h2>
            {" "}
            <span className="first-name">Aymeric</span>{" "}
            <span className="last-name">Sandoz</span>{" "}
          </h2>
        </div>
        <div className="profession">
          <h1>Web Developer</h1>
        </div>

        <div className="age">
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <p>October 23, 1996 </p>
        </div>
        <div className="nationality">
          <FontAwesomeIcon icon={faFontAwesomeFlag} className="icon" />
          <p> French </p>{" "}
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <p> Versailles, Yvelines </p>{" "}
        </div>
        <div className="media-link">
          <a href="https://github.com/AymericSandoz">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/aymeric-sandoz-5311781a2/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
      <div className="right-side-presentation">
        <Navbars className="navbar" />
        {rightBottomSide == "skills" && (
          <>
            <div className="about-me">
              <h3>About me </h3>
              <div className="bar-container">
                <div
                  className={
                    hiddenPart == "1" ? "bar bar-1 active-bar" : "bar bar-1"
                  }
                  onClick={() => setHiddenPart("1")}
                ></div>
                <div
                  className={
                    hiddenPart == "2" ? "bar bar-2 active-bar" : "bar bar-2"
                  }
                  onClick={() => setHiddenPart("2")}
                ></div>
                <div
                  className={
                    hiddenPart == "3" ? "bar bar-3 active-bar" : "bar bar-3"
                  }
                  onClick={() => setHiddenPart("3")}
                ></div>
              </div>
              {hiddenPart == "1" && (
                <p className="part-1">
                  My ambition for the rest of my career is first to develop
                  solid skills as a full stack developer. In a second step, I
                  would like to work on projects related to ecology.
                </p>
              )}
              {hiddenPart == "2" && (
                <p className="part-2">
                  {" "}
                  Recently graduated from OpenClassrooms - Web Developer degree.{" "}
                  <br /> <br />
                  Scientific background in ecology - Master 2.{" "}
                </p>
              )}

              {hiddenPart == "3" && (
                <p className="part-3">
                  {" "}
                  I am really interested in topics related to ecology, wildlife
                  and agriculture. <br /> <br />I play competitive spikeball.{" "}
                </p>
              )}
            </div>
            <Skills />
          </>
        )}
        {rightBottomSide == "project" && <Project />}
      </div>
    </div>
  );
}

export default Home;
