//LayoutRecycler.js is Basic or LayoutBasic
import React from "react";
import { Layout, Row, Col } from "antd";
//Components
import MenuTop from "../components/Web/MenuTop";
import LoadRoutes from "../components/LoadRoutes";
//SCSS
import "../scss/LayoutRecycler.scss";

export default function LayoutRecycler({ routes }) {
  const { Footer } = Layout;
  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <MenuTop />
        </Col>
        <Col lg={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer> Eye in the Sky Technologies RapidCycle </Footer>
    </>
  );
}
