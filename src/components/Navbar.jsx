import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  document.addEventListener("scroll", () => {
    let nav = document.getElementById("nav");
    nav.className = "navbar";
  });
  return (
    <div id="nav" className="navbar hidden">
      <div>
        <img src={logo} alt="Logo" />
        <h1>Kenneth Schaefer</h1>
      </div>
      <nav className="navigation">
        {isNavExpanded ? (
          <></>
        ) : (
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#725AC1"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            {isNavExpanded ? (
              <div id="close-nav">
                <button
                  id="close-navbar"
                  onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                  X
                </button>
              </div>
            ) : (
              <></>
            )}
            <li>
              <a
                href="#title"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Contact
              </a>
            </li>
            <div className="social-media">
              <a
                href="https://www.github.com/parzidog"
                className="fa fa-github"
              ></a>
              <a
                href="https://www.linkedin.com/in/parzidog"
                className="fa fa-linkedin"
              ></a>
              <a
                href="mailto: kenneth.schaefer.ii@icloud.com"
                className="fa fa-envelope"
              ></a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
