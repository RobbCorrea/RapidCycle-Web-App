import React, { useState } from "react";
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
  //inputs stores the state, setInputs updates the state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  });

  const changeForm = e => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    }
  };

  const register = e => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repite tu contraseña"
          className="register-form__input"
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          He leído la política de privacidad y la acepto.
        </Checkbox>
      </Form.Item>
      <Button htmlType="submit" className="register-form__button">
        Crear cuenta
      </Button>
    </Form>
  );
}

export default RegisterForm;
