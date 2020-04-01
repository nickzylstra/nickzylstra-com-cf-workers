import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './Project.module.scss';

const thumbsLocation = '/assets/images/thumbs/';

const Project = ({ project, handleModalShow }) => {
  const {
    id, name, thumb,
  } = project;

  const {
    Title, Img, ImgOverlay,
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
      <Img
        src={`${thumbsLocation}${thumb}`}
        crossOrigin="anonymous"
        alt={`${name} project card image`}
        className={styles.imgHoverchild}
      />
      <ImgOverlay className={styles.contentHoverchild}>
        <Title as="h4">{name}</Title>
      </ImgOverlay>
    </Card>
  );
};

export default Project;
