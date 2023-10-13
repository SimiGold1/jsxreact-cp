import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Components/NavbarComponent.css';

function NavbarComponent() {
  return (
    // Rendering the Navbar component from react-bootstrap
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Rendering the Navbar.Brand with logo image and text */}
        <Navbar.Brand href="#home"><img src="kicksss.gif" alt="Logo" className="logo-image" />KICKS.ng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Rendering the Nav.Links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* Rendering the NavDropdown */}
            <NavDropdown title="Kicks" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Male Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Female Sneakers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Unisex Sneakers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sneakers Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent; // Exporting the NavbarComponent