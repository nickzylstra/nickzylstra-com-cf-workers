import React from 'react';
import { Card } from 'react-bootstrap';
import GithubIcon from '../About/Contact/GithubIcon';

import styles from './Project.module.scss';

const thumbsLocation = '/assets/images/thumbs/';

const Project = ({ project, handleModalShow }) => {
  const {
    id, name, githubLink, thumb,
  } = project;

  const {
    Title, Img, ImgOverlay, Header, Text,
  } = Card;

  const openModal = () => handleModalShow(id);

  return (
    <Card
      id={`card-${id}`}
      onClick={openModal}
      onKeyPress={openModal}
      aria-label={`project-${id}`}
      className={`${styles.project} ${styles.hoverparent}`}
      tabIndex="0"
    >
      <Header>
        <Title as="h6">{name}</Title>
      </Header>
      <Img src={`${thumbsLocation}${thumb}`} crossOrigin="anonymous" alt={`${name} project card image`} className={styles.imgHoverchild} />
      <ImgOverlay className={styles.contentHoverchild}>
        <Text>Click to see project details!</Text>
        <div className={styles.content}>
          <Text>Or go straight to the code -</Text>
          <GithubIcon url={githubLink} />
        </div>
      </ImgOverlay>
    </Card>
  );
};

export default Project;
