import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">What to watch</Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Title"
          className="mr-2"
          aria-label="Search"
        />
        <NavDropdown title="Type" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Movie</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Series</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Episode</NavDropdown.Item>
        </NavDropdown>
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
