import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../components/category/Product";
import SelectBox from "../../components/selectBox/SelectBox";

function ProductPage() {
  return (
    <Container className="my-3">
      <h1>sa</h1>
      <Row>
        <Col xs={12} md={4} l={2} xl={2}>
          <SelectBox />
        </Col>
        <Col xs={12} md={8} l={10} xl={10}>
          <Product />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
