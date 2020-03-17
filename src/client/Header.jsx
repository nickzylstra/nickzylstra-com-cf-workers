import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Container fixed="top">
    <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark">
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
  </Container>
);

export default Header;
