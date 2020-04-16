import React from "react";
import { Link } from "react-router-dom";
//Components
import LoginForm from "../../../components/Collector/LoginForm";
import RegisterForm from "../../../components/Collector/RegisterForm";
//Ant Design components
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
//Assets
import Logo from "../../../assets/images/smallDiamondLeaf.png";
//SCSS
import "../../../scss/SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <Link to={"/"}>
            <img src={Logo} alt="Rapid Cycle Diamond Leaf Logo" />
          </Link>
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Nuevo Recolector</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
