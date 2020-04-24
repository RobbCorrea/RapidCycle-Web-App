import React from "react";
import { Row, Col } from "antd";

import "../../../scss/MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Nutre tu mundo, <br /> nutre tu economía.
          </h2>
          <h3>
            Administra tu red de empleados, productos
            <br />y clientes de reciclaje.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
