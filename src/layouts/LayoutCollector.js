//LayoutCollector.js is Admin or LayoutAdmin
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
//Hooks
import useAuth from "../hooks/useAuth";
//Functional Components
import LoadRoutes from "../components/LoadRoutes";
import MenuTop from "../components/Collector/MenuTop";
import CollectorSider from "../components/Collector/CollectorSider";

//Functions
//import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";
//Pages equivalent to AdminSignIn.
import CollectorSignIn from "../pages/Admin/SignIn";
//SCSS
import "../scss/LayoutCollector.scss";

export default function LayoutCollector({ routes }) {
  //Or const {routes} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;
  //Means user is not logged in. But if it's truthy, the user's logged in.
  //The hooks returns all the data inside the token. Name, email, role, etc.
  //user holds the object with all the user data.
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/admin/login" component={CollectorSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  if (user && !isLoading) {
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

  return null;
}
