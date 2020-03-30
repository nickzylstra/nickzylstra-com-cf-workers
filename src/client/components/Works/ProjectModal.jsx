import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import { formatDistance } from 'date-fns';

const ProjectModal = ({ project, handleModalHide }) => {
  const {
    name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Header, Body, Footer,
  } = Modal;

  const lastUpdatedDuration = formatDistance(new Date(lastUpdated), new Date());

  return (
    <Modal
      aria-label="project-modal"
      show
      onHide={handleModalHide}
      size="xl"
    >
      <Header closeButton>
        <Title as="h5">{name}</Title>
      </Header>
      <Body>
        <Image src={image} crossOrigin="anonymous" alt={`${name} project`} />
      </Body>
      <Body>
        <p>{description}</p>
        <p>{`Tech: ${tags.reduce((list, tag) => `${list}, ${tag}`)}`}</p>
      </Body>
      <Footer>
        <a href={githubLink} target="_blank" rel="noreferrer noopener">
          {`Github last updated: ${lastUpdatedDuration} ago`}
        </a>
      </Footer>
    </Modal>
  );
};

export default ProjectModal;
