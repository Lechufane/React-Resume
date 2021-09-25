import React from "react";
import PROJECTS from "../data/projects";

function Projects() {
  return (
<div>
  <h2>Mis proyectos</h2>
  <div className="projects">
        {PROJECTS.map((project) => {
          return (
    <div key={project.id} className="project">
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
      <img src={project.image} alt="Project" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      </a>
    </div>
          );
        })}
  </div>
</div>
  );
}

export default Projects;
