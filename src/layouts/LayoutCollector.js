//LayoutCollector.js is Admin or LayoutAdmin
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
//Functional Components
import LoadRoutes from "../components/LoadRoutes";
import MenuTop from "../components/Collector/MenuTop";
import CollectorSider from "../components/Collector/CollectorSider";
//Pages
import CollectorSignIn from "../pages/Admin/SignIn";
//SCSS
import "../scss/LayoutCollector.scss";

export default function LayoutCollector({ routes }) {
  //Or const {routes} = props;
  const { Header, Content, Footer } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const user = null;

  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={CollectorSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout>
      <CollectorSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">
          E-SkyTech's RapidCycle all rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}
