import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SelectBox() {
  return (
    <Container fluid className="sticky-sm-top">
      <Row
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          scrollbarColor: "black",
        }}
      >
        <Col p-0>
          <Form className="mt-3 mb-3 d-flex flex-column justify-content-center align- items center">
            <h5>Model</h5>
            <hr />
            <Form.Check
              inline
              label="Apple"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Samsung"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="Xiaomi"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <hr />
            <h5>Fiyat</h5>
            <hr />
            <Form.Check
              inline
              label="3000 TL ve altında"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="5000-8000 TL"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              label="8000-12000 TL"
              name="group1"
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Button> Ara</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SelectBox;
