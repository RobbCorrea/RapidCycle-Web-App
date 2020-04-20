import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Avatar,
  Button,
  Modal as ModalAntd,
  notification
} from "antd";
//Ant Design icons.
import {
  CheckOutlined,
  EditOutlined,
  StopOutlined,
  DeleteOutlined
} from "@ant-design/icons";
//Components
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
//Images
import Noavatar from "../../../../assets/images/avatar.png";

import "../../../../scss/ListUsers.scss";

export default function ListUsers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  /* console.log(usersActive);
  console.log(usersInactive); */

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios activos" : "Usuarios inactivos"}
        </span>
      </div>

      {viewUsersActives ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
      )}

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function UsersActive(props) {
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent
  } = props;

  const editUser = user => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${user.name ? user.name : "Agrega un nombre"} ${
        user.lastname ? user.lastname : "Agregar un apellido"
      }`
    );
    setModalContent(<EditUserForm user={user} />);
  };
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={user => (
        <List.Item
          actions={[
            <>
              <Button type="primary" onClick={() => editUser(user)}>
                <EditOutlined />
              </Button>
              <Button
                type="danger"
                onClick={() => console.log("Desactivar Usuario")}
              >
                <StopOutlined />
              </Button>
              <Button
                type="danger"
                onClick={() => console.log("Eliminar Usuario")}
              >
                <DeleteOutlined />
              </Button>
            </>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.avatar ? user.avatar : Noavatar} />}
            title={`
              ${user.name ? user.name : "..."}
              ${user.lastname ? user.lastname : "..."}
              `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}

function UsersInactive(props) {
  const { usersInactive, setReloadUsers } = props;

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={user => (
        <List.Item
          actions={[
            <>
              <Button
                type="primary"
                onClick={() => console.log("Activar Usuario")}
              >
                <CheckOutlined />
              </Button>
              <Button
                type="danger"
                onClick={() => console.log("Eliminar Usuario")}
              >
                <DeleteOutlined />
              </Button>
            </>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.avatar ? user.avatar : Noavatar} />}
            title={`
              ${user.name ? user.name : "..."}
              ${user.lastname ? user.lastname : "..."}
              `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}
