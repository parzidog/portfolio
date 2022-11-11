import React,{useEffect} from "react";
import Typewriter from "typewriter-effect";
import { jobs } from "../assets/data";
import resume from "../assets/resume.pdf";
import { listener } from "../assets/helperFunctions";

const Experience = () => {

  const [start, setStart] = React.useState(false);
  
  let num = 0;
  let  id = "education";

  useEffect(() => {
    listener(id, setStart)
  },[]);

  return (
    <div className="experience" id="experience">
      <h1>
        {start ? <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Experience").start();
              }}
              options={{
                autoStart: true,
              }}
            /> : <></>}
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
