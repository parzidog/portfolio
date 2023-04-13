import React, { useEffect } from 'react';
import { projects } from '../assets/data';
import Typewriter from 'typewriter-effect';
import { listener } from '../assets/helperFunctions';

const Projects = () => {
  const [clicked, setClicked] = React.useState({
    name: '',
    url: '',
    picture: '',
    repo: '',
    description: '',
  });
  const [start, setStart] = React.useState(false);
  const rotatehelper = (val, minA, maxA, minB, maxB) => {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  };

  const id = 'aboutme';
  let element;

  useEffect(() => {
    listener(id, setStart);
  }, []);

  const handleMouseMove = (event) => {
    const img = event.target;

    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    const rotateY = rotatehelper(mouseX, 0, 180, -15, 15);
    const rotateX = rotatehelper(mouseY, 0, 250, 15, -15);
    const brightness = rotatehelper(mouseY, 0, 250, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  };
  const handleMouseLeave = (event) => {
    if (event.target.firstChild.children[1].nodeName !== 'IMG') {
      event.target.parentNode.firstChild.children[1].style.transform =
        'rotateX(0deg) rotateY(0deg)';
      event.target.parentNode.firstChild.children[1].style.filter = 'brightness(1)';
    } else if (event.target.firstChild.children[1]) {
      event.target.firstChild.children[1].style.transform = 'rotateX(0deg) rotateY(0deg)';
      event.target.firstChild.children[1].style.filter = 'brightness(1)';
    }
  };

  return (
    <div className='projects' id='projects'>
      <h1 className='typewriter' id='typewriter'>
        {start ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('My Projects').start();
            }}
            options={{
              autoStart: true,
            }}
          />
        ) : (
          <></>
        )}
      </h1>
      <div className='projectContainer'>
        {projects.map((project) => {
          return (
            <div className='project' key={project.name} onMouseLeave={handleMouseLeave}>
              <div>
                <h2>{project.name}</h2>
                <img
                  src={project.picture}
                  alt={project.name}
                  onMouseMove={handleMouseMove}
                  onClick={() => {
                    setClicked(project);
                    element =
                      document.getElementById('projectInfo') || document.createElement('div');
                    element.scrollIntoView({ behavior: 'smooth' });
                    element.className = 'projectInfo show';
                  }}
                />
              </div>
              {project.url ? (
                <form target='_blank' action={project.url}>
                  <button type='submit'>Visit Site</button>
                </form>
              ) : (
                <></>
              )}
              {project.repo ? (
                <form target='_blank' action={project.repo}>
                  <button type='submit'>See Repo</button>
                </form>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className='projectInfo' id='projectInfo'>
        {clicked.picture ? (
          <>
            <img src={clicked.picture} alt='Project' />
            <h1>{clicked.name}</h1>
            <h3>{clicked.description}</h3>
          </>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default Projects;
