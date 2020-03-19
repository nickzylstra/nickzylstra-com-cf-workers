import React from 'react';
import { Card } from 'react-bootstrap';


const Project = ({ project }) => {
  const {
    id, name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Body, Title, Subtitle, Text,
  } = Card;

  return (
    <Card id={`card-${id}`}>
      <Body>
        <Title>{name}</Title>
        <Subtitle>{`last updated: ${lastUpdated}`}</Subtitle>
        <Text>{description}</Text>
        <Text>{tags.reduce((list, tag) => `${list}, ${tag}`)}</Text>
        <Card.Link>{githubLink}</Card.Link>
        <Card.Link>{image}</Card.Link>
      </Body>
    </Card>
  );
};

export default Project;
