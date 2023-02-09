import React, { useEffect } from "react";
import logo from "../assets/name.svg";

const Title = () => {
  let isMobile = () => {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      mobile = true;
    }
  };
  let mobile = false;
  useEffect(() => {
    const title = document.getElementById("title");
    isMobile();
    title.style.paddingTop = `${window.innerHeight / 2 - 150}px`;
    window.addEventListener("resize", () => {
      title.style.paddingTop = `${window.innerHeight / 2 - 100}px`;
    }, []);
  });

  return (
    <div className="title" id="title">
      <div className="logo rotateInRight">
        <img src={logo} alt="" />
      </div>
      <div className="descriptive">
        <h2 className="descriptor  slideRight" style={!mobile ? { fontSize: 50 } : ""} id="adaptable">
          Adaptable
        </h2>
        <div className="line"></div>
        <h2 className="descriptor bounceIn" style={!mobile ? { fontSize: 50 } : ""} id="creative">
          Creative
        </h2>
        <div className="line"></div>
        <h2 className="descriptor slideLeft" style={!mobile ? { fontSize: 50 } : ""} id="focused">
          Focused
        </h2>
      </div>
    </div>
  );
};

export default Title;
