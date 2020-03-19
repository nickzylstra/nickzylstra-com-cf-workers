import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ theme }) => {
  const { variant, bg } = theme;
  const path = window.location.pathname.substring(1) || '/';
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand href="/">nz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav-header" />
      <Navbar.Collapse id="responsive-navbar-nav-header">
        <Nav defaultActiveKey={path}>
          <Nav.Link
            as={Link}
            to="/"
            eventKey="/"
            aria-label="home-link"
          >
            home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="portfolio"
            eventKey="portfolio"
            aria-label="portfolio-link"
          >
            portfolio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="about"
            eventKey="about"
            aria-label="about-link"
          >
            about
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
