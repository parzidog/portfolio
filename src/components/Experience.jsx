import React from "react";
import Typewriter from "typewriter-effect";
import { jobs } from "../assets/data";
import resume from "../assets/resume.pdf";

const Experience = () => {
  let num = 0;
  return (
    <div className="experience">
      <h1>
      <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Experience").pauseFor(2500).start();
            }}
            options={{
              autoStart: true,
            }}
          />
      </h1>
      <h2 className="download">
        <a href={resume} download>
          Download Resume
        </a>
      </h2>
      {jobs.map((job) => {
        return (
          <div className="singleJob" key={job.name}>
            <h3 className="companyName">{job.name}</h3>
            <p className="date">{job.date}</p>
            <div className="jobDetails">
              <ul>
                {job.description.map((bullet) => {
                  num += 1;
                  return <li key={num}>{bullet}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
