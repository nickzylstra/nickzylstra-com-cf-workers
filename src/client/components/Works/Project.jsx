import React from 'react';
import { Card, Button } from 'react-bootstrap';
import GithubIcon from '../About/Contact/GithubIcon';

import styles from './Project.module.scss';

const thumbsLocation = '/assets/images/thumbs/';

const Project = ({ project, handleModalShow }) => {
  const {
    id, name, githubLink, thumb,
  } = project;

  const {
    Title, Img, ImgOverlay, Header,
  } = Card;

  const openModal = () => handleModalShow(id);

  return (
    <Card id={`card-${id}`} className={`${styles.project} ${styles.hoverparent}`}>
      <Header onClick={openModal}>
        <Title as="h6">{name}</Title>
      </Header>
      <Img src={`${thumbsLocation}${thumb}`} crossOrigin="anonymous" alt={`${name} project card image`} className={styles.imgHoverchild} />
      <ImgOverlay className={styles.contentHoverchild}>
        <Button variant="secondary" onClick={openModal}>Learn more!</Button>
        <GithubIcon url={githubLink} />
      </ImgOverlay>
    </Card>
  );
};

export default Project;
