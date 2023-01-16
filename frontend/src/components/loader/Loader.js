import React from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
function Loader() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    </div>
  );
}

export default Loader;
