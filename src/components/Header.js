import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Navbar.Brand href="#" className="mx-1">
        What to watch
      </Navbar.Brand>
      <Form className="d-flex mx-1">
        <FormControl
          type="search"
          placeholder="Title"
          className="mr-2 col"
          aria-label="Search"
          onSubmit={props.onSearch}
        />
        <NavDropdown title="Type" id="navbarScrollingDropdown" className="col">
          <NavDropdown.Item href="#action3">Movie</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Series</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Episode</NavDropdown.Item>
        </NavDropdown>
        <Button variant="outline-success" className="col">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;
