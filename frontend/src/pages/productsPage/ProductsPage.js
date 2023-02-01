import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import Product from "../../components/products/Products";
import SelectBox from "../../components/selectBox/SelectBox";

function ProductsPage() {
  const location = useLocation();
  console.log(location);
  return (
    <Container className="my-3">
      <h1>{location.state}</h1>
      <Row>
        <Col xs={12} md={4} l={2} xl={2}>
          <SelectBox />
        </Col>
        <Col xs={12} md={8} l={10} xl={10}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsPage;
