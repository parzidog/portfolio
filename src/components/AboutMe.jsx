import React from "react";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="container">
        <h1 className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("About Me").pauseFor(2500).start();
            }}
            options={{
              autoStart: true,
            }}
          />
        </h1>
        <p className="paragraph">
          I am a lifelong student above all else. I am also a Marine Corps
          veteran with a degree in engineering and a true passion for computer
          programming. I spent more than 7 years in the Marine Corps with a
          top-secret security clearance working as a hydraulic and structures
          mechanic on F/A-18 and F-35 fighter jets where I successfully
          coordinated the duties of over 50 Marines while conducting the duties
          of the department head and running the phased maintenance program, one
          of the largest programs in military aviation maintenance. As a result
          of my abilities and efforts, I was awarded the Navy/Marine Corps
          Achievement medal on 2 separate occasions, as well as numerous other
          awards and commendations, including multiple Good Conduct medals and
          Letters of Commendation. After leaving military service, I worked as a
          foreman for a commercial construction company where I simultaneously
          ran up to 3 job sites. It was during this period that I decided to go
          back to school and obtain my degree in engineering while
          simultaneously working up to three jobs to continue . It was at then
          that I discovered my love for computers and computer programming.
          While attending college full-time, I taught myself C/C++, Python, HTML
          and CSS programming languages before deciding to pursue a formal
          education in Software Engineering with a focus in JavaScript and web
          development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
