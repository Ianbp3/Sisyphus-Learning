import React, { useState } from "react";
import logo2 from "../Logo2.png";
import hgman from "../HangmanColor.png";
import pairsG from "../Pairs.png";
import { useGlobal } from "./GlobalContext";

import {
  Form,
  Input,
  Button,
  Avatar,
  Space,
  message,
  Divider,
  Typography,
  Flex,
  Col,
  Row,
  Popover,
  Progress,
} from "antd";
import {
  BellOutlined,
  BookOutlined,
  TeamOutlined,
  SmileOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Lobby() {
  const { globalVariable, setGlobalVariable } = useGlobal();
  const navigate = useNavigate();
  return (
    <div>
      <header
        style={{
          height: "120px",
        }}
      >
        <Row>
          <Col span={22} push={2}>
            <Flex
              style={{
                width: "95%",
                height: 92,
                marginLeft: "25px",
              }}
              justify="space-between"
              align="center"
            >
              <Title
                strong
                style={{
                  color: "#2f2c79",
                  fontSize: "80px",
                  marginTop: "60px",
                }}
              >
                TAREAS
              </Title>
              <Flex
                style={{
                  width: "10%",
                  height: 92,
                }}
                justify="center"
                align="center"
              >
                <Button
                  type="ghost"
                  size="large"
                  style={{ width: "30%", marginTop: "20px" }}
                  icon={
                    <BellOutlined
                      style={{
                        fontSize: "40px",
                        color: "#2f2c79",
                      }}
                    />
                  }
                ></Button>
              </Flex>
            </Flex>
            <Divider
              style={{
                width: "50px",
                borderColor: "#fda332",
                borderWidth: 3,
              }}
            />
          </Col>
          <Col span={2} pull={22}>
            <div>
              <Avatar
                size={120}
                align="center"
                style={{ float: "center" }}
                src={logo2}
                shape="square"
              ></Avatar>
            </div>
          </Col>
        </Row>
      </header>
      <Row>
        <Col span={22} push={2}>
          <Flex
            vertical
            justify="space-between"
            align="flex-start"
            style={{
              height: "76vh",
              margin: "25px",
            }}
          >
            <Flex gap={20}>
              <Button
                style={{
                  width: "300px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  fontFamily: "Pacifico, cursive",
                  color: "#2f2c79",
                  fontSize: "30px",
                  backgroundColor: "#a9d8ff",
                }}
                onClick={() => navigate("/Hangman")}
              >
                DEFINICIONES
                <img src={hgman} style={{ width: "100px", height: "100px" }} />
              </Button>
              <Button
                style={{
                  width: "300px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  fontFamily: "Pacifico, cursive",
                  color: "#ffffff",
                  fontSize: "30px",
                  backgroundColor: "#ba2d4c",
                }}
                onClick={() => navigate("/Pairs")}
              >
                PARES
                <img src={pairsG} style={{ width: "100px", height: "100px" }} />
              </Button>
            </Flex>
            <Progress
              style={{ width: "80%" }}
              percent={globalVariable}
              percentPosition={{
                align: "start",
                type: "outer",
              }}
            />
          </Flex>
        </Col>
        <Col span={2} pull={22}>
          <Flex
            gap={20}
            vertical
            justify="space-around"
            align="center"
            style={{
              width: "120px",
              height: "83.6vh",
              backgroundColor: "#2f2c79",
            }}
          >
            <Popover placement="right" content="Yo">
              <Button
                type="ghost"
                size="large"
                icon={
                  <SmileOutlined
                    style={{ fontSize: "50px", color: "#ffffff" }}
                  />
                }
              ></Button>
            </Popover>
            <Popover placement="right" content="Lecciones">
              <Button
                type="ghost"
                size="large"
                icon={
                  <BookOutlined
                    style={{ fontSize: "50px", color: "#ffffff" }}
                  />
                }
              ></Button>
            </Popover>
            <Popover placement="right" content="Mis Compañeros">
              <Button
                type="ghost"
                size="large"
                icon={
                  <TeamOutlined
                    style={{ fontSize: "50px", color: "#ffffff" }}
                  />
                }
              ></Button>
            </Popover>
            <Popover placement="right" content="Salir">
              <Button
                type="ghost"
                size="large"
                icon={
                  <CloseSquareOutlined
                    style={{ fontSize: "50px", color: "#ffffff" }}
                  />
                }
                onClick={() => navigate("/")}
              ></Button>
            </Popover>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}

export default Lobby;
