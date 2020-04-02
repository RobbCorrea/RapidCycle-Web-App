import React from "react";
//Ant Design components
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
//Assets
import miniLeaf from "../../../assets/images/user.png";
//SCSS
import "../../../scss/index.scss";
import "../../../scss/RegisterFormCollector.scss";

//Register Form Component for adding new waste collectors to collector profile.

function RegisterForm() {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repite tu contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          He leído la política de privacidad y la acepto.
        </Checkbox>
      </Form.Item>
      <Button htmlType="submit" className="register-form_button">
        Crear cuenta
      </Button>
    </Form>
  );
}

export default RegisterForm;
