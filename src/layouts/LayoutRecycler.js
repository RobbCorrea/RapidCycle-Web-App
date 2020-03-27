//LayoutRecycler.js is Basic or LayoutBasic
import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

//Importing CSS
import "../scss/LayoutRecycler.scss";
import LoadRoutes from "../components/LoadRoutes";

export default function LayoutRecycler({ routes }) {
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider for Recycler...</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Welcome to your very own RapidCycle</Footer>
      </Layout>
    </Layout>
  );
}
