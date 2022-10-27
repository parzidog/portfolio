import React from "react";
import logo from "../assets/logo.svg";

const Title = () => {
  return (
    <div className="title">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="descriptive">
        <h2 id="adaptable">Adaptable</h2>
        <div className="line"></div>
        <h2 id="creative">Creative</h2>
        <div className="line"></div>
        <h2 id="focused">Focused</h2>
      </div>
    </div>
  );
};

export default Title;
