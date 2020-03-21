import React from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';
import Project from './Project.jsx';
import './Projects.scss';


const sortByDate = (a, b) => moment(b.lastUpdated).diff(moment(a.lastUpdated));

const Projects = ({ projects }) => (
  <Container className="projects">
    {projects.sort(sortByDate).map((p) => <Project key={p.id} project={p} />)}
  </Container>
);

export default Projects;
