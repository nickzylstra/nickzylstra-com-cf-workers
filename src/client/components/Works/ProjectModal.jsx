import React from 'react';
import { Modal, Card } from 'react-bootstrap';
import moment from 'moment';
import theme from '../../theme';

// import styles from './ProjectModal.module.scss';


const ProjectModal = ({ project, showModal, handleModalHide }) => {
  const {
    name, description, githubLink, lastUpdated, image, tags,
  } = project;

  const {
    Title, Header, Body, Footer,
  } = Modal;

  return (
    <Modal
      show={showModal}
      onHide={handleModalHide}
      // className={`bg-${theme.bg}
      // text-${theme.text}`}
    >
      <Header closeButton>
        <Title>{name}</Title>
      </Header>
      <Body>
        <Card.Img src={image} crossOrigin="anonymous" alt={`${name} project card image`} />
        <Card.Text>{description}</Card.Text>

        <Card.Text>{`Tech: ${tags.reduce((list, tag) => `${list}, ${tag}`)}`}</Card.Text>
      </Body>
      <Footer>
        <Card.Link href={githubLink} target="_blank" rel="noreferrer noopener">
          {`Github last updated: ${moment(lastUpdated).calendar()}`}
        </Card.Link>
      </Footer>
    </Modal>
  );
};

export default ProjectModal;
