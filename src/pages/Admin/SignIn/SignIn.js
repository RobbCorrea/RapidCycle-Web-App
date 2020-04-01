import React from "react";
//Ant Design components
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/images/smallDiamondLeaf.png";
import "../../../scss/SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Rapid Cycle Diamond Leaf Logo" />
        </h1>
        <Tabs type="card">
          <TabPane tab={<span>Entrar</span>} key="1">
            Componente LoginForm
          </TabPane>
        </Tabs>
        <div className="sign-in__content-tabs"></div>
      </Content>
    </Layout>
  );
}
