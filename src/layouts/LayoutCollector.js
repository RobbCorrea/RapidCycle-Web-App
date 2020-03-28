//LayoutCollector.js is Admin or LayoutAdmin
import React from "react";
import { Layout } from "antd";
//Functional Component
import LoadRoutes from "../components/LoadRoutes";
//SCSS
import "../scss/LayoutCollector.scss";

export default function LayoutCollector({ routes }) {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      {/*TO DO: Menu Sider*/}
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          {/* TO DO: Menu Top */}RapidCycle
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes}></LoadRoutes>
        </Content>
        <Footer className="layout-admin__footer">
          E-SkyTech's RapidCycle all rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}
