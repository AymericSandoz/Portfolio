import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbars from "../Navbar";
import Home from "../../pages/Home";
import PersonnalProject from "../Projects/PersonnalProject";
import Projects from "../Projects/Projects";
import SchoolProject from "../Projects/SchoolProject";
const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personnal-project" element={<PersonnalProject />} />
        <Route path="/school-project" element={<SchoolProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
