import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.scss';


const Project = ({ project }) => {
  const {
    id, name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Subtitle, Text, Img, ImgOverlay,
  } = Card;

  return (
    // TODO - use themeprovider hook
    <Card id={`card-${id}`} className="bg-dark text-white">
      <Img src={image} crossOrigin="anonymous" alt={`${name} project card image`} className="img-hover" />
      <ImgOverlay className="text-hover">
        <Title>{name}</Title>
        <Subtitle>{`last updated: ${lastUpdated}`}</Subtitle>
        <Text>{description}</Text>
        <Text>{tags.reduce((list, tag) => `${list}, ${tag}`)}</Text>
        <Card.Link>{githubLink}</Card.Link>
      </ImgOverlay>
    </Card>
  );
};

export default Project;
