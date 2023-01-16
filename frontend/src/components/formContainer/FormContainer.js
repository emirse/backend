import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./formcontainer.css";
function FormContainer({ param, children }) {
  return (
    <div>
      <Form onSubmit={param}>
<<<<<<< HEAD
        <Container className="form-container">
=======
        <Container className="form-container mt-5">
>>>>>>> df0ee14 (fix)
          <Row className="form-style">{children}</Row>
        </Container>
      </Form>
    </div>
  );
}

export default FormContainer;
