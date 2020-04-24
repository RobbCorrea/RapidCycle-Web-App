import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MenuOutlined,
  BookOutlined,
  MessageOutlined,
  HomeOutlined
} from "@ant-design/icons";

import "../../../scss/MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        //defaultSelectedKeys={["/admin/users"]}
      >
        <Menu.Item key="/admin">
          <Link to="/admin">
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to="/admin/users">
            <UserOutlined />
            <span className="nac-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <Link to="/admin/menu">
            <MenuOutlined />
            <span className="nac-text">Menú</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/courses">
          <Link to="/admin/courses">
            <BookOutlined />
            <span className="nac-text">Cursos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/blog">
          <Link to="/admin/blog">
            <MessageOutlined />
            <span className="nac-text">Blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
