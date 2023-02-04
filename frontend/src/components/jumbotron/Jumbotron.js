import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Jumbotron() {
  return (
    <Container className="text-center">
      <hr />
      <h1>Süper Teklifler</h1>
      <Row className="ms-3 me-3 gap-3">
        <Col
          className="p-lg-3 d-flex flex-column justify-content-center align-items-center col-md-10 p-lg-5 mx-auto my-5 border border-warning-subtle rounded-5
"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("https://img.freepik.com/free-photo/flat-lay-bunch-fresh-provisions-donation_23-2148733838.jpg?w=1060&t=st=1674343532~exp=1674344132~hmac=195a2e6f72f0704db91e7ccabc99428a59202e2a10594962ab5d385e32f3129c")`,
          }}
        >
          <Container
            className="border border-warning-subtle rounded-5"
            style={{ backgroundColor: "wheat" }}
          >
            <h1 className="display-6 fw-normal">Kampanya</h1>
            <p className="lead fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit alias neque dolor quos? Eaque maxime voluptas saepe
              blanditiis asperiores quisquam!
            </p>
            <a className="btn btn-outline-secondary mb-3 mb-sm-3" href="#">
              İncele
            </a>
          </Container>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Jumbotron;
