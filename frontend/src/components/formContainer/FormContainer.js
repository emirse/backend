import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./formcontainer.css";
function FormContainer({ param, children }) {
  return (
    <div>
      <Form onSubmit={param}>
        <Container className="form-container">
          <Row className="form-style">{children}</Row>
        </Container>
      </Form>
    </div>
  );
}

export default FormContainer;
