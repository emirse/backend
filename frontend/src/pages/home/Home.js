import React from "react";
import Product from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../../components/jumbotron/Jumbotron";

function Home() {
  return (
    <div>
      <Container fluid>
        <Slider />
      </Container>
      <Container>
        <Jumbotron />
        <Row className="d-flex justify-content-center align-items-center">
          <Product obj={"Ürünler"} />
          <Product obj={"İlgini Çekebilecek Ürünler"} />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
