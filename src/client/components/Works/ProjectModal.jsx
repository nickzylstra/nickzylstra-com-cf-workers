import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import moment from 'moment';
import theme from '../../theme';

import styles from './ProjectModal.module.scss';


const ProjectModal = ({ project, handleModalHide }) => {
  const {
    name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Header, Body, Footer,
  } = Modal;

  return (
    <Modal
      show
      onHide={handleModalHide}
      className={styles.ProjectModal}
      size="xl"
      // className={`bg-${theme.bg}
      // text-${theme.text}`}
    >
      <Header closeButton>
        <Title>{name}</Title>
      </Header>
      <Body>
        <Image src={image} crossOrigin="anonymous" alt={`${name} project`} />
      </Body>
      <Body>
        <p>
          {description}
        </p>
        <p>{`Tech: ${tags.reduce((list, tag) => `${list}, ${tag}`)}`}</p>
      </Body>
      <Footer>
        <a href={githubLink} target="_blank" rel="noreferrer noopener">
          {`Github last updated: ${moment(lastUpdated).calendar()}`}
        </a>
      </Footer>
    </Modal>
  );
};

export default ProjectModal;
