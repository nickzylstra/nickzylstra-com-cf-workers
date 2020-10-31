import React from 'react';
import { Modal } from 'react-bootstrap';
import { formatDistance } from 'date-fns';
import GithubIcon from '../About/Contact/GithubIcon';

const ProjectModal = ({ project, handleModalHide }) => {
  const {
    name, description, githubLink, lastUpdated, image, tags, imageW, imageH,
  } = project;

  const descLink = project.descriptionLink;

  const {
    Title, Header, Body, Footer,
  } = Modal;

  const techTags = tags.reduce((list, tag) => `${list}, ${tag}`);
  const lastUpdatedDuration = formatDistance(new Date(lastUpdated), new Date());

  return (
    <Modal
      aria-label="project-modal"
      show
      restoreFocus={false}
      onHide={handleModalHide}
      size="xl"
    >
      <Header closeButton>
        <Title as="h5">{name}</Title>
      </Header>
      <Body>
        <img
          src={image}
          crossOrigin="anonymous"
          alt={`${name} project`}
          width={imageW || '500'}
          height={imageH || '500'}
        />
      </Body>
      <Body>
        <p>{description}</p>
        {!descLink ? null : (
          <a
            href={descLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Bonus content!
          </a>
        )}
        <p>{`Tech: ${techTags}`}</p>
      </Body>
      <Footer>
        <GithubIcon url={githubLink} />
        <p>{`last updated ${lastUpdatedDuration} ago`}</p>
      </Footer>
    </Modal>
  );
};

export default ProjectModal;
