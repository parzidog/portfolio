import React, { useEffect } from 'react';
import logo from '../assets/name.png';

const Title = () => {
  
    const onLoad = () => {
        const title = document.getElementById('title') || document.createElement('div');
        title.style.paddingTop = `${window.innerHeight / 2 - 150}px`;
        window.addEventListener('resize', () => {
            title.style.paddingTop = `${window.innerHeight / 2 - 100}px`;
        });
    };

    // useEffect(() => {
    //   title = document.getElementById("title");
    //   title.style.paddingTop = `${window.innerHeight / 2 - 150}px`;
    //   window.addEventListener("resize", () => {
    //     title.style.paddingTop = `${window.innerHeight / 2 - 100}px`;
    //   }, []);
    // });

    return (
        <div onLoad={onLoad} className="title" id="title">
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