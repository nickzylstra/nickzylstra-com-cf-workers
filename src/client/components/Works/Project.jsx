import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import theme from '../../theme';

import styles from './Project.module.scss';


const Project = ({ project }) => {
  const {
    id, name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Text, Img, ImgOverlay, Header,
  } = Card;

  return (
    // TODO - use themeprovider hook
    <Card id={`card-${id}`} className={`${styles.project} bg-${theme.bg} text-${theme.text} ${styles.hoverparent}`}>
      <Header>
        <Title>{name}</Title>
      </Header>
      <Img src={image} crossOrigin="anonymous" alt={`${name} project card image`} className={styles['img-hoverchild']} />
      <ImgOverlay className={styles['text-hoverchild']}>
        <Card.Link href={githubLink} target="_blank" rel="noreferrer noopener">{`Github last updated: ${moment(lastUpdated).calendar()}`}</Card.Link>
        <Text>{description}</Text>
        <Text>{`Tech: ${tags.reduce((list, tag) => `${list}, ${tag}`)}`}</Text>
      </ImgOverlay>
    </Card>
  );
};

export default Project;
