//LayoutRecycler.js is Basic or LayoutBasic
import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

//Importing CSS
import "../scss/LayoutRecycler.scss";

export default function LayoutRecycler(props) {
  console.log(props);
  return (
    <Layout>
      <h2>Menu Sider for Recycler...</h2>
      <div>Content...</div>
      <h5>Footer...</h5>
    </Layout>
  );
}
