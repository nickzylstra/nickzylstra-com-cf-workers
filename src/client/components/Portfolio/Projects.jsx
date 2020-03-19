import React from 'react';
import Project from './Project.jsx';


const Projects = ({ projects }) => (
  <div>
    {projects.map((p) => <Project key={p.id} project={p} />)}
  </div>
);

export default Projects;
