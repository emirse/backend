import React from "react";
import { Row, Table } from "react-bootstrap";
import PaginationComp from "../../../../components/pagination/PaginationComp";
import "./completedorder.css";
function CompletedOrders() {
  return (
    <div>
      <h1>Geçmiş Siparişlerim</h1>{" "}
      <Row className="parent">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <div className="child">
          <PaginationComp />
        </div>
      </Row>
    </div>
  );
}

export default CompletedOrders;
