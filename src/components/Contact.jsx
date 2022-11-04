import React from "react";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Contact").pauseFor(2500).start();
          }}
          options={{
            autoStart: true,
          }}
        />
      </h1>
      <div className="info">
        <h2 className="propertyName">Phone:</h2>
        <h2 className="propertyValue">(317) 361-2543</h2>
      </div>
      <div className="info">
        <h2 className="propertyName">Email:</h2>
        <h2 className="propertyValue">
          <a href="mailto: kenneth.schaefer.ii@icloud.com">
            kenneth.schaefer.ii@icloud.com
          </a>
        </h2>
      </div>
      <div className="info">
        <h2 className="propertyName">Github:</h2>
        <h2 className="propertyValue">
          <a href="https://www.github.com/parzidog">github.com/parzidog</a>
        </h2>
      </div>
      <div className="info">
        <h2 className="propertyName">Linkedin:</h2>
        <h2 className="propertyValue">
          <a href="https://www.linkedin.com/in/parzidog">
            linkedin.com/in/parzidog
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
