import React, { useEffect } from "react";
import { projects } from "../assets/data";
import Typewriter from "typewriter-effect";
import { listener } from "../assets/helperFunctions";

const Projects = () => {
  const [clicked, setClicked] = React.useState({});
  const [start, setStart] = React.useState(false);
  const rotatehelper = (val, minA, maxA, minB, maxB) => {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  };

  let  id = "aboutme"

  useEffect(() => {
  listener(id, setStart)
  },[])

  const handleMouseMove = (event) => {
    let img = event.target;

    let mouseX = event.nativeEvent.offsetX;
    let mouseY = event.nativeEvent.offsetY;
    let rotateY = rotatehelper(mouseX, 0, 180, -15, 15);
    let rotateX = rotatehelper(mouseY, 0, 250, 15, -15);
    let brightness = rotatehelper(mouseY, 0, 250, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  };
  const handleMouseLeave = (event) => {
    if (event.target.firstChild.children[1].nodeName !== "IMG") {
      event.target.parentNode.firstChild.children[1].style.transform =
        "rotateX(0deg) rotateY(0deg)";
      event.target.parentNode.firstChild.children[1].style.filter =
        "brightness(1)";
      } else if(event.target.firstChild.children[1]) {
      event.target.firstChild.children[1].style.transform =
        "rotateX(0deg) rotateY(0deg)";
      event.target.firstChild.children[1].style.filter = "brightness(1)";
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="typewriter" id="typewriter">
          {start ? <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("My Projects").start();
            }}
            options={{
              autoStart: true,
            }}
          /> : <></>}
        </h1>
        <div className="projectContainer">
          {projects.map((project) => {
            return (
              <div
                className="project"
                key={project.name}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <h2>{project.name}</h2>
                  <img
                    src={project.picture}
                    alt={project.name}
                    onMouseMove={handleMouseMove}
                    onClick={() => {
                      setClicked(project)
                      let element = document.getElementById("projectInfo")
                      element.scrollIntoView({ behavior: "smooth" })
                      element.className = "projectInfo show";
                    }}
                  />
                </div>
                {project.url ? <form action={project.url}>
                  <button type="submit">Visit Site</button>
                </form>
                  : <></>}
                <form action={project.repo}>
                  <button type="submit">See Repo</button>
                </form>
              </div>
            );
          })}
        </div>
        <div className="projectInfo" id="projectInfo">
        {clicked.picture ? 
        <>
          <img src={clicked.picture} alt="Project" />
          <h1>{clicked.name}</h1>
          <h3>{clicked.description}</h3>
        </>
          :<> </>}
          </div>
      </div>
    </div>
  );
};

export default Projects;
