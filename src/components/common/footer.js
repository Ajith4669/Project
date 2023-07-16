import React from "react";
import {
  SendOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Space } from "antd";

const { TextArea } = Input;

function Footer() {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8}>
          <div className="footer-section">
            <div className="footer-row">
              <span>
                <h1>
                  <img src="../titleimg.png"></img>
                </h1>
                <p style={{ color: "#936B09" }}>Change The Impossible</p>
                <p>
                  <EnvironmentOutlined
                    style={{ fontSize: "1.8rem", marginRight: "2%" }}
                  />
                  May flower, 23, Avinashi,
                </p>
                <p style={{ marginLeft: "15%" }}>Peelamedu,Coimbatore 641006</p>
                <p>
                  <MailOutlined
                    style={{ fontSize: "1.8rem", marginLeft: "3%" }}
                  />
                  dummy@gmail.com
                </p>
                <p>
                  <PhoneOutlined
                    style={{ fontSize: "1.8rem", marginRight: "10%" }}
                  />
                  +91-9999999999
                </p>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
          <div className="footer-section">
            <div className="footer-row">
              <span>
                <h3>Business</h3>
                <p>Technology</p>
                <p>Steel</p>
                <p>Automotive</p>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className="footer-section">
            <div className="footer-row">
              <span>
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <Form
                  style={{
                    width: "100%",
                  }}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please give your E-mail!",
                      },
                    ]}
                  >
                    <Space.Compact
                      style={{
                        width: "100%",
                      }}
                    >
                      <Input placeholder="Email" />
                      <Button className="button1" htmlType="submit">
                        <SendOutlined
                          style={{ color: "#5A5A5A", fontSize: "1.5rem" }}
                        />
                      </Button>
                    </Space.Compact>
                  </Form.Item>
                </Form>
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <span className="copyright">Copyright &copy; 2023 LANRAN Tech</span>
    </div>
  );
}

export default Footer;
