import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import theme from '../theme';


import styles from './Header.module.scss';

const Header = () => {
  const { variant, bg } = theme;
  const { pathname } = useLocation();

  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand href="/">nz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav-header" />
      <Navbar.Collapse id="responsive-navbar-nav-header">
        <Nav className={styles['navbar-nav']} activeKey={pathname}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              eventKey="/"
              aria-label="home-link"
            >
              home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/portfolio"
              eventKey="/portfolio"
              aria-label="portfolio-link"
            >
              works
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              eventKey="/about"
              aria-label="about-link"
            >
              about
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
