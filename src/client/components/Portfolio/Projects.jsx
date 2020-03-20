import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import Project from './Project.jsx';


const Projects = ({ projects }) => (
  <Container>
    <CardDeck>
      {projects.map((p) => <Project key={p.id} project={p} />)}
    </CardDeck>
  </Container>
);

export default Projects;
