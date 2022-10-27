import React from "react";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Quote from "./Quote.jsx";
import Title from "./Title.jsx";

const Main = () => {
  return (
    <>
      <Navbar />
      <Title />
      <Quote />
      <AboutMe />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </>
  );
};

export default Main;
