import React from "react";
import logo from "../assets/logo.svg";

const Title = () => {
  return (
    <div className="title" id="title">
      <div className="logo rotateInRight">
        <img src={logo} alt="" />
      </div>
      <div className="descriptive">
        <h2 className="descriptor  slideRight" id="adaptable">
          Adaptable
        </h2>
        <div className="line"></div>
        <h2 className="descriptor bounceIn" id="creative">
          Creative
        </h2>
        <div className="line"></div>
        <h2 className="descriptor slideLeft" id="focused">
          Focused
        </h2>
      </div>
    </div>
  );
};

export default Title;
