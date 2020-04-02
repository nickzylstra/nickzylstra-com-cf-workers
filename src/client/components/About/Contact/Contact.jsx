import React from 'react';
import { Container } from 'react-bootstrap';
import SocialIcons from './SocialIcons';
import Message from './Message';

const About = () => (
  <Container as="article">
    <Message />
    <SocialIcons />
  </Container>
);

export default About;
