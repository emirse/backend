import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getShopAction } from "../../store/actions/shopAction/getShopAction";
import CreateShop from "../shop/CreateShop";
import Shop from "../shop/Shop";
import CompletedOrders from "./subProfile/completedOrders/CompletedOrders";
import Orders from "./subProfile/orders/Orders";
import ProfileInfo from "./subProfile/profileInfo/ProfileInfo";
import Rating from "./subProfile/rating/Rating";
import UserAddresses from "./subProfile/userAddresses/UserAddresses";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState("step1");
  const { userInfo } = useSelector((state) => state.auth);
  const {
    error: shopError,
    success: successError,
    loading: loadingError,
    shop,
  } = useSelector((state) => state.getShop);
  useEffect(() => {
    dispatch(getShopAction());
  }, []);
  const pageHandler = (e) => {
    setPage(e);
  };
  return (
    <Container className="my-5">
      <h1>Hesabım</h1>
      <Row className="mt-5">
        <Col xs={12} md={4} l={4} xl={3} className="d-flex flex-column">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link onClick={() => pageHandler("step1")}>
              Kullanıcı Bilgilerim
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step2")}>
              Şifre Değişikliği
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step3")}>Adreslerim</Nav.Link>
            <Nav.Link onClick={() => pageHandler("step4")}>Siparişler</Nav.Link>
            <Nav.Link onClick={() => pageHandler("step5")}>
              Geçmiş Siparişler
            </Nav.Link>
            <Nav.Link onClick={() => pageHandler("step6")}>
              Değerlendirmeler
            </Nav.Link>

            <Nav.Link
              disabled={shop !== undefined && shop.status === "Yes"}
              onClick={() => pageHandler("step7")}
            >
              Market Başvurusu
            </Nav.Link>
          </Nav>
        </Col>
        {page == "step1" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <ProfileInfo />
          </Col>
        ) : page == "step2" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <ProfileInfo />
          </Col>
        ) : page == "step3" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <UserAddresses />
          </Col>
        ) : page == "step4" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <Orders />
          </Col>
        ) : page == "step5" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <CompletedOrders />
          </Col>
        ) : page == "step6" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <Rating />
          </Col>
        ) : page == "step7" ? (
          <Col xs={12} md={8} l={8} xl={9}>
            <CreateShop />
          </Col>
        ) : (
          <h1>Sayfa Bulunamadı</h1>
        )}
      </Row>
    </Container>
  );
}

export default ProfilePage;
