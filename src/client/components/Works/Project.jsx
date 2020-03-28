import React from 'react';
import { Card, Button } from 'react-bootstrap';
import GithubIcon from '../About/Contact/GithubIcon';

import styles from './Project.module.scss';


const Project = ({ project, handleModalShow }) => {
  const {
    id, name, githubLink, image,
  } = project;

  const {
    Title, Img, ImgOverlay, Header,
  } = Card;

  const openModal = () => handleModalShow(id);

  return (
    <Card id={`card-${id}`} className={`${styles.project} ${styles.hoverparent}`}>
      <Header>
        <Title as="h6" onClick={openModal}>{name}</Title>
      </Header>
      <Img src={image} crossOrigin="anonymous" alt={`${name} project card image`} className={styles.imgHoverchild} />
      <ImgOverlay className={styles.contentHoverchild}>
        <Button variant="secondary" onClick={openModal}>Learn more!</Button>
        <GithubIcon url={githubLink} />
      </ImgOverlay>
    </Card>
  );
};

export default Project;
