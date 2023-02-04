import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BadgeComp from "../badge/BadgeComp";

function BottomBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlBottomBar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };
  console.log(show);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlBottomBar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlBottomBar);
      };
    }
  }, [lastScrollY]);

  return (
    <Container
      xs={12}
      style={{
        position: show ? "fixed" : "none",
        display: show ? "block" : "none",
        zIndex: 1,
      }}
      fluid
      className="d-xxl-none d-xl-none d-xxl-block d-lg-none d-xl-block d-md-none d-lg-block bottom-0"
    >
      <Row>
        <Col className="bg-dark d-flex justify-content-between align-items-center">
          <Col>
            <Link
              to="/"
              className="mt-3 text-light d-flex flex-column align-items-center"
            >
              <i className="fa-solid fa-house"> </i>
              <h6>Ana Sayfa</h6>
            </Link>
          </Col>
          <Col>
            <Link className="mt-3 text-light d-flex flex-column align-items-center">
              <i className="fa-solid fa-bars"></i>
              <h6>Kategoriler</h6>
            </Link>
          </Col>
          <Col>
            <Link className="mt-3 text-light d-flex flex-column align-items-center">
              <BadgeComp />
              <h6>Sepetim</h6>
            </Link>
          </Col>
          <Col>
            <Link className="mt-3 text-light d-flex flex-column align-items-center">
              <i className="fa-solid fa-user"></i>
              <h6>Profil</h6>
            </Link>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomBar;
