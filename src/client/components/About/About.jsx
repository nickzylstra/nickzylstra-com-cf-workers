import React from 'react';
import { Container } from 'react-bootstrap';
import Summary from './Summary';
import Contact from './Contact/Contact';


const About = () => (
  <Container aria-label="about-page">
    <Summary />
    <Contact />
  </Container>
);

export default About;
