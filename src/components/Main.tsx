import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Navbar from './Navbar';
import Projects from './Projects';
import Quote from './Quote';
import Title from './Title';

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
