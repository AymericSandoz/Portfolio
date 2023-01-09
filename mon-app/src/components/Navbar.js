import { faBars } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [navbar, displayNavbar] = useState(false);
  const [activeNavbarItem, setActiveNavbarItem] = useState("Home");

  return (
    <>
      {" "}
      <div className="navbar-container">
        {" "}
        {navbar && (
          <nav>
            {" "}
            <NavLink
              className={
                activeNavbarItem == "Home" ? "navbar-item actif" : "navbar-item"
              }
              to="/?right_bottom_side=skills"
              onClick={() => setActiveNavbarItem("Home")}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              className={
                activeNavbarItem == "Projects"
                  ? "navbar-item a actif "
                  : "navbar-item"
              }
              to="/?right_bottom_side=project"
              onClick={() => setActiveNavbarItem("Projects")}
            >
              {" "}
              Projects{" "}
            </NavLink>{" "}
            {/* <NavLink className="navbar-item" to="/personnal-project">
              Personnal Projects
            </NavLink>
            <NavLink className="navbar-item" to="/school-project">
              School Project
            </NavLink> */}
          </nav>
        )}
        <FontAwesomeIcon
          className="icon display-navbar"
          icon={faBars}
          onClick={() => displayNavbar(!navbar)}
        />{" "}
      </div>{" "}
    </>
  );
};

export default Navbar;
