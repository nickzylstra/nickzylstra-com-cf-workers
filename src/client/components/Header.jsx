import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ theme }) => {
  const { variant, bg } = theme;
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand as={Link} to="/">nz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav-header" />
      <Navbar.Collapse id="responsive-navbar-nav-header">
        <Nav defaultActiveKey="/">
          <Nav.Link as={Link} to="/">home</Nav.Link>
          <Nav.Link as={Link} to="portfolio">portfolio</Nav.Link>
          <Nav.Link as={Link} to="about">about</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
