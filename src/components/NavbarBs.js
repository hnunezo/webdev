import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarBs = () => {
  return (
    <div>
      <Navbar className="navbar_container" variant="dark">
        <Container>
          <Navbar.Brand href="#home">WV</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#general">General</Nav.Link>
            <Nav.Link href="#frontend">FrontEnd</Nav.Link>
            <Nav.Link href="#backend">BackEnd</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarBs;
