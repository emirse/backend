import React from "react";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <Container id="footer" className="footer-size">
      <div>Footer</div>
    </Container>
  );
=======
import { Container, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return <Row id="footer">Footer</Row>;
>>>>>>> df0ee14 (fix)
}

export default Footer;
