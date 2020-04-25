import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Ant Design
import { Menu } from "antd";
//RapidCycle Brand Letters
import rcletters from "../../../assets/images/rcletters.png";
//Menu
import { getMenuApi } from "../../../api/menu";
import SocialLinks from "../SocialLinks";

import "../../../scss/WebMenuTop.scss";

export default function MenuTop() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenuApi().then(response => {
      const arrayMenu = [];
      response.menu.forEach(item => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);

  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={rcletters} alt="Rapid Cycle" />
        </Link>
      </Menu.Item>

      {menuData.map(item => {
        const external = item.url.indexOf("http") > -1 ? true : false;
        if (external) {
          return (
            <Menu.Item key={item._id} className="menu-top-web__item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={item._id} className="menu-top-web__item">
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        );
      })}

      <SocialLinks />
    </Menu>
  );
}

/*      

      
    </Menu>
  );
*/
