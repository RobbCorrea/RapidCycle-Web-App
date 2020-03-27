//LayoutCollector.js is Admin or LayoutAdmin
import React from "react";
import { Layout } from "antd";
//Functional Component
import LoadRoutes from "../components/LoadRoutes";

import "../scss/LayoutCollector.scss";

export default function LayoutCollector({ routes }) {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu sider LayoutCollector</h2>
      <Layout>
        <Header>RapidCycle</Header>
        <Content>
          <LoadRoutes routes={routes}></LoadRoutes>
        </Content>
        <Footer>E-SkyTech's RapidCycle all rights reserved</Footer>
      </Layout>
    </Layout>
  );
}
