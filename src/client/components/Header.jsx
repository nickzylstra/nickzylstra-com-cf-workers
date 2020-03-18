import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

const Header = ({ theme }) => {
  const { variant, bg } = theme;
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand href="/">nz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav-header" />
      <Navbar.Collapse id="responsive-navbar-nav-header">
        <Nav defaultActiveKey="/">
          <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="#portfolio">portfolio</Nav.Link>
          <Nav.Link href="#about">about</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
