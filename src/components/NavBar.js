import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/my-logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-color">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="progmatic99 logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={["fas", "bars"]} color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link
                href="https://blog.progmatic99.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
