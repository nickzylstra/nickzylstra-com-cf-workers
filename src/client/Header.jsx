import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ theme }) => {
  const { variant, bg } = theme;
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" variant={variant} bg={bg}>
      <Navbar.Brand href="/">Nick Zylstra</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav-header" />
      <Navbar.Collapse id="responsive-navbar-nav-header">
        <Nav fill defaultActiveKey="/">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
