import React from "react";
import "./home.css";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { Container, Row } from "react-bootstrap";

function Home() {
  return (
    <Container className="home-container">
      <Row>
        <Slider />
        <h1 style={{ marginTop: "25px" }}>Ürünler</h1>
        <Product />
        <h1>İlgini Çekebilecek Ürünler</h1>
        <Product />
      </Row>
    </Container>
  );
}

export default Home;
