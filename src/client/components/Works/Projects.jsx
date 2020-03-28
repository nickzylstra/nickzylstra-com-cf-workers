import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';
import Project from './Project';
import ProjectModal from './ProjectModal';

import styles from './Projects.module.scss';


const sortByDate = (a, b) => moment(b.lastUpdated).diff(moment(a.lastUpdated));


const Projects = ({ projects }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const handleModalShow = (projectId) => {
    setModalProject(projects.find(({ id }) => id === projectId));
    setShowModal(true);
  };
  const handleModalHide = () => setShowModal(false);

  return (
    <Container className={styles.projects}>
      {!showModal ? null
        : (
          <ProjectModal
            project={modalProject}
            handleModalHide={handleModalHide}
          />
        )}
      {projects.sort(sortByDate).map((p) => (
        <Project
          key={p.id}
          project={p}
          handleModalShow={handleModalShow}
        />
      ))}
    </Container>
  );
};

export default Projects;
