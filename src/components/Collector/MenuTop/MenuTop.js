import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import RCLeafLogo from "../../../assets/images/smallDiamondLeaf.png";
//SCSS
import "../../../scss/MenuTop.scss";

function MenuTop(props) {
  console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/"}>
          <img
            className="menu-top__left-logo"
            src={RCLeafLogo}
            alt="Rapid Cycle Green Leaf Logo"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button
          type="link"
          onClick={() => {
            console.log("Desconexión");
          }}
        >
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}

export default MenuTop;
