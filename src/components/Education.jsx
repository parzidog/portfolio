import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { listener } from '../assets/helperFunctions';
import { schools } from '../assets/data';

const Education = () => {
  const [start, setStart] = React.useState(false);

  const id = 'projects';

  useEffect(() => {
    listener(id, setStart);
  }, []);

  return (
    <div className='education' id='education'>
      <h1>
        {start ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Education & Certifications').start();
            }}
            options={{
              autoStart: true,
            }}
          />
        ) : (
          <></>
        )}
      </h1>
      {schools.map((school) => {
        return (
          <div className='singleInstitute' key={school.name}>
            <h3 className='certification'>{school.certification}</h3>
            <h4 className='instituteName'>{school.name}</h4>
            <p className='date'>{school.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
