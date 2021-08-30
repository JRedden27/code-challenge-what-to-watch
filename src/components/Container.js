import React from "react";
import { Card } from "react-bootstrap";

const Container = (props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header className="bg-primary text-light text-center">
        {props.title}
      </Card.Header>
      <Card.Body className="d-flex justify-content-center">
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default Container;
