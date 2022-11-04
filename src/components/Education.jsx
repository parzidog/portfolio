import React from "react";
import Typewriter from "typewriter-effect";
import { schools } from "../assets/data";

const Education = () => {
  return (
    <div className="education" id="education">
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Education").pauseFor(2500).start();
          }}
          options={{
            autoStart: true,
          }}
        />
      </h1>
      {schools.map((school) => {
        return (
          <div className="singleInstitute" key={school.name}>
            <h3 className="certification">{school.certification}</h3>
            <h4 className="instituteName">{school.name}</h4>
            <p className="date">{school.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
