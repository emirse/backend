import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckOut({ step1, step2, step3, step4 }) {
  return (
    <Container>
      <Nav className="justify-content-center mb-4">
        <Nav.Item>
          {step1 ? (
            <LinkContainer to="/profileinfo">
              <Nav.Link>Üye Girişi</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Üye Girişi</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            <LinkContainer to="/useraddresses">
              <Nav.Link>Adres Bilgileri</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Adres Bilgileri</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <LinkContainer to="/orders">
              <Nav.Link>Ödeme Bilgileri</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Ödeme Bilgileri</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <LinkContainer to="/placeorder">
              <Nav.Link>Tamamlandı</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Tamamlandı</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default CheckOut;
