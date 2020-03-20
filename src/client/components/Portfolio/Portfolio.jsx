import React, { useState } from 'react';
import Projects from './Projects.jsx';


const initProjects = [{
  id: 1,
  name: 'Home Payment Calculator',
  description: 'Front end focused microservice to calculate monthly home ownership costs.  Part of larger real estate site.',
  githubLink: 'https://github.com/fRiend-hrsf124/costHomeOwnership-service',
  lastUpdated: new Date(),
  image: 'https://raw.githubusercontent.com/fRiend-hrsf124/costHomeOwnership-service/master/fec.gif',
  tags: ['react', 'mysql', 'jest', 'enzyme', 'react-styled-components', 'express', 'node.js', 'webpack', 'gulp', 'circleci', 'aws-s3', 'aws-ec2', 'docker'],
}];

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(initProjects);

  return (
    <div aria-label="portfolio-page">
      Portfolio
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
