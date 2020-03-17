import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = ({ theme }) => {
  const { variant, bg } = theme;
  return (
    <Navbar fixed="bottom" expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand href="/">NZ</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
