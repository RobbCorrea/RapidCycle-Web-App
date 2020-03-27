//LayoutCollector.js is Admin or LayoutAdmin
import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "../scss/LayoutCollector.scss";

export default function LayoutCollector(props) {
  //toDelete
  //console.log(props);
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu sider LayoutCollector</h2>
      <Layout>
        <Header>RapidCycle</Header>
        <Content>
          <LoadRouters routes={routes}></LoadRouters>
        </Content>
        <Footer>E-SkyTech's RapidCycle all rights reserved</Footer>
      </Layout>
    </Layout>
  );
}

//Instead of a const { props } = props; I'll just destructure in the params.
function LoadRouters({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
