import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { listener } from '../assets/helperFunctions';

const Contact = () => {
  const [start, setStart] = React.useState(false);

  const id = 'education';

  useEffect(() => {
    listener(id, setStart);
  }, []);

  return (
    <div className='contact' id='contact'>
      <h1 className='typewriter'>
        {start ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Contact').start();
            }}
            options={{
              autoStart: true,
            }}
          />
        ) : (
          <></>
        )}
      </h1>
      <div className='info'>
        <h2 className='propertyName'>Phone:</h2>
        <h2 className='propertyValue'>
          <a href='tel:+13173612543'>(317) 361-2543</a>
        </h2>
      </div>
      <div className='info'>
        <h2 className='propertyName'>Email:</h2>
        <h2 className='propertyValue'>
          <a href='mailto: kenneth.schaefer.ii@icloud.com'>kenneth.schaefer.ii@icloud.com</a>
        </h2>
      </div>
      <div className='info'>
        <h2 className='propertyName'>Github:</h2>
        <h2 className='propertyValue'>
          <a href='https://www.github.com/parzidog' target='_blank' rel='noreferrer'>
            github.com/parzidog
          </a>
        </h2>
      </div>
      <div className='info'>
        <h2 className='propertyName'>Linkedin:</h2>
        <h2 className='propertyValue'>
          <a href='https://www.linkedin.com/in/parzidog' target='_blank' rel='noreferrer'>
            linkedin.com/in/parzidog
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
