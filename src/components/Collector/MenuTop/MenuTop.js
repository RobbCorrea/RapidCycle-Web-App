import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import RCLeafLogo from "../../../assets/images/smallDiamondLeaf.png";
//SCSS
import "../../../scss/MenuTop.scss";

function MenuTop(props) {
  console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={RCLeafLogo}
          alt="Rapid Cycle Green Leaf Logo"
        />
        <Button type="link" onClick={() => setMenuCollapsed(true)}>
          <MenuUnfoldOutlined />
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
