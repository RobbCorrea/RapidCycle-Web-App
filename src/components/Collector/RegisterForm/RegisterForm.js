import React, { useState } from "react";
//Ant Design components
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
//Assets
import miniLeaf from "../../../assets/images/user.png";
//SCSS
import "../../../scss/index.scss";
import "../../../scss/RegisterFormCollector.scss";
//Utils
import {
  minLengthValidation,
  emailValidation
} from "../../../utils/formValidation";

//Register Form Component for adding new waste collectors to collector profile.

function RegisterForm() {
  //INPUTS (inputs stores the state, setInputs updates the state)
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  });

  //INPUT VALIDATION
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
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

  const inputValidation = e => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({
        ...formValid,
        //pushes a name to the array
        [name]: emailValidation(e.target)
      });
    }

    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6)
      });
    }

    if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked
      });
    }
  };

  //UPDATE
  const register = () => {
    console.log("Formulario enviado");
    console.log(inputs);
    const { email, password, repeatPassword, privacyPolicy } = formValid;
    const passwordVal = inputs.password;
    const repeatPassword = inputs.repeatPassword;

    if (
      !inputs.name ||
      !passwordVal ||
      !repeatPassword ||
      !inputs.privacyPolicy
    ) {
    }
  };

  return (
    <Form className="register-form" onFinish={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(40, 146, 215, 1)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          onChange={inputValidation}
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
          onChange={inputValidation}
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
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
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
