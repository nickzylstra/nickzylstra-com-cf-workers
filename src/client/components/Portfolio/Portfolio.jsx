import React, { useState } from 'react';
import Projects from './Projects.jsx';


const initProjects = [
  {
    id: 1,
    name: 'Home Payment Calculator',
    description: 'Front end focused microservice to calculate monthly home ownership costs.  Part of larger real estate site.',
    githubLink: 'https://github.com/fRiend-hrsf124/costHomeOwnership-service',
    lastUpdated: '2019-12-15T17:39:14Z',
    image: 'https://raw.githubusercontent.com/fRiend-hrsf124/costHomeOwnership-service/master/fec.gif',
    tags: ['react', 'react-styled-components', 'express', 'node.js', 'mysql', 'webpack', 'gulp', 'circleci', 'aws-s3', 'aws-ec2', 'docker', 'jest', 'enzyme'],
  },
  {
    id: 2,
    name: 'Referral eSignature Integration',
    description: 'Embedded iframe app to retrieve Docusign hosted contacts and forms, add form info, send for signature, and receive signature status updates.',
    githubLink: 'https://github.com/nickzylstra/eSignIntegration',
    lastUpdated: '2020-03-09T17:39:14Z',
    image: 'https://raw.githubusercontent.com/nickzylstra/eSignIntegration/master/demo.gif',
    tags: ['react', 'bootstrap', 'express', 'node.js', 'mongodb', 'webpack', 'aws-ec2', 'nginx', 'docusign-esign', 'jwt', 'jest', 'react-testing-library'],
  },
  {
    id: 3,
    name: 'Stock Price History Graph Backend',
    description: 'Service scaled to 2500 RPS deployed throughput with NGINX load balancer, four Express app servers, one Redis API cache, and one 105M record PostgreSQL database, each on AWS EC2 T2 micros.',
    githubLink: 'https://github.com/Camelot-Stocks/Graph-Service',
    lastUpdated: '2020-01-10T17:39:14Z',
    image: 'https://i.imgur.com/ZtBOqYf.png',
    tags: ['react', 'express', 'node.js', 'postgresql', 'cassandra', 'redis', 'aws-ec2', 'nginx', 'jest', 'artillery.io', 'loader.io', 'newrelic'],
  },
  {
    id: 4,
    name: 'Bowling Score Simulation',
    description: 'App to test Xstate finite state machine library on handling game scoring and progress. Used model-based testing to automatically generate tests for relevant paths of state machine graph model.',
    githubLink: 'https://github.com/nickzylstra/mini-apps-2/master/challenge_3',
    lastUpdated: '2020-01-22T17:39:14Z',
    image: 'https://raw.githubusercontent.com/nickzylstra/mini-apps-2/master/challenge_3/statechart.png',
    tags: ['react', 'xstate', 'express', 'node.js', 'webpack', 'jest', 'enzyme'],
  },
  {
    id: 5,
    name: 'Minesweeper',
    description: 'Minesweeper clone to test redux and create react app.',
    githubLink: 'https://github.com/nickzylstra/mini-apps-2/tree/master/challenge_4',
    lastUpdated: '2020-02-04T17:39:14Z',
    image: 'https://raw.githubusercontent.com/nickzylstra/mini-apps-2/master/challenge_4/demo.gif',
    tags: ['create-react-app', 'redux', 'redux-thunk', 'jest', 'react-testing-library'],
  },
  {
    id: 6,
    name: 'Collider',
    description: 'Collider game to test d3',
    githubLink: 'https://github.com/nickzylstra/collider',
    lastUpdated: '2020-03-07T17:39:14Z',
    image: 'https://raw.githubusercontent.com/nickzylstra/collider/master/demo.gif',
    tags: ['create-react-app', 'd3'],
  },
];

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(initProjects);

  return (
    <div aria-label="portfolio-page">
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
