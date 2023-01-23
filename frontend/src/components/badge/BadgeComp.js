import React from "react";
import { Badge, Button } from "react-bootstrap";

function BadgeComp({ cardQuantitiy }) {
  return (
    <Button variant="transparent" className="position-relative">
      <i
        style={{ color: "wheat" }}
        className="fa-solid fa-cart-shopping shopping-cart rounded-pill position-relative "
      ></i>
      <Badge
        style={{
          height: "5px",
          width: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "5px",
        }}
        className="position-absolute start-100 translate-middle p-2 border border-light rounded-circle"
        bg="transparent"
      >
        {cardQuantitiy}
      </Badge>
    </Button>
  );
}

export default BadgeComp;
