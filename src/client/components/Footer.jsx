import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = ({ theme }) => {
  const { variant, bg } = theme;
  return (
    <Navbar fixed="bottom" variant={variant} bg={bg}>
      <Navbar.Brand href="/">nz</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
