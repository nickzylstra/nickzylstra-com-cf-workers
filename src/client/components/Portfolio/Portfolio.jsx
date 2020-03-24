import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from './Projects.jsx';


const initProjects = [
  {
    id: 1,
    name: 'Projects not loaded',
    description: 'Something went wrong.  See my github at the link instead.',
    githubLink: 'https://github.com/nickzylstra',
    lastUpdated: new Date(),
    image: '/assets/favicon_io/android-chrome-512x512.png',
    tags: ['interwebs'],
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(initProjects);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/assets/projects.json');
        setProjects(data.projects);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <div aria-label="portfolio-page">
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
