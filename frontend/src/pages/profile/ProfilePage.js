import React, { useState } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import Shop from "../shop/Shop";
import CompletedOrders from "./subProfile/completedOrders/CompletedOrders";
import Orders from "./subProfile/orders/Orders";
import ProfileInfo from "./subProfile/profileInfo/ProfileInfo";
import Rating from "./subProfile/rating/Rating";
import UserAddresses from "./subProfile/userAddresses/UserAddresses";

function ProfilePage() {
  const [page, setPage] = useState("step1");
  const pageHandler = (e) => {
    setPage(e);
  };
  return (
    <Container className="my-5">
      <h1>Hesabım</h1>
      <Row className="mt-5">
        <Col xs={12} md={3} l={3} xl={3} className="d-flex flex-column">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link onClick={() => pageHandler("step1")}>
              Kullanıcı Bilgilerim
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step2")}>
              Şifre Değişikliği
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step3")}>Adreslerim</Nav.Link>
            <Nav.Link onClick={() => pageHandler("step4")}>Siparişler</Nav.Link>
            <Nav.Link className="mb-1" onClick={() => pageHandler("step5")}>
              Geçmiş Siparişler
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step6")}>
              Değerlendirmeler
            </Nav.Link>
          </Nav>
        </Col>
        {page == "step1" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            <ProfileInfo />
          </Col>
        ) : page == "step2" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            <ProfileInfo />
          </Col>
        ) : page == "step3" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            <UserAddresses />
          </Col>
        ) : page == "step4" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            <Orders />
          </Col>
        ) : page == "step5" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            {" "}
            <CompletedOrders />
          </Col>
        ) : page == "step6" ? (
          <Col xs={12} md={9} l={9} xl={9}>
            <Rating />
          </Col>
        ) : (
          <h1>Sayfa Bulunamadı</h1>
        )}
      </Row>
    </Container>
  );
}

export default ProfilePage;
