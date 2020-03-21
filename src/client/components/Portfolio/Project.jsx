import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import './Project.scss';


const Project = ({ project }) => {
  const {
    id, name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Text, Img, ImgOverlay, Body,
  } = Card;

  return (
    // TODO - use themeprovider hook
    <Card id={`card-${id}`} className="bg-dark text-white hoverparent">
      <Img src={image} crossOrigin="anonymous" alt={`${name} project card image`} className="img-hoverchild" />
      <ImgOverlay className="text-hoverchild">
        <Body>
          <Title>{name}</Title>
          <Card.Link href={githubLink}>{`Github last updated: ${moment(lastUpdated).calendar()}`}</Card.Link>
          <Text>{description}</Text>
          <Text>{`Tech: ${tags.reduce((list, tag) => `${list}, ${tag}`)}`}</Text>
        </Body>
      </ImgOverlay>
    </Card>
  );
};

export default Project;
