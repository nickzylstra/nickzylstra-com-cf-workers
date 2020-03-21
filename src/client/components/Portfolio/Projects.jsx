import React from 'react';
import { Container } from 'react-bootstrap';
import Project from './Project.jsx';
import './Projects.scss';


const Projects = ({ projects }) => (
  <Container className="projects">
    {projects.map((p) => <Project key={p.id} project={p} />)}
  </Container>
);

export default Projects;
