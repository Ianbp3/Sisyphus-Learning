import React from "react";
import { useState } from "react";
import { Form, Input, Button, Avatar, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../logo.png";

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = (e) => {
    const { miUsuario, miContra } = e;
    if (miUsuario === "sisyphus" && miContra === "learning123") {
      setShowAlert(false);
      message.success("Login Exitoso!");
      navigate("/Lobby");
    } else {
      message.error("Usuario o Contraseña incorrecto");
      setShowAlert(true);
      console.log(showAlert);
    }
  };

  return (
    <div className="Login">
      <Form form={form} onFinish={onFinish}>
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <Avatar
            size={150}
            align="center"
            style={{ float: "center", backgroundColor: "grey", color: "white" }}
            src={logo}
          ></Avatar>
        </Space>
        <Form.Item name={"miUsuario"}>
          <Input placeholder="Escribe tu usuario" />
        </Form.Item>
        <Form.Item required="True" name={"miContra"}>
          <Input.Password placeholder="Escribe tu contraseña" />
        </Form.Item>

        <Button
          style={{ marginRight: "10px", backgroundColor: "#2C2C2C" }}
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
