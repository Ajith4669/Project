import { Anchor, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { Layout, Drawer, Button, Menu, Col, Row, Space } from "antd";
import {
  DatabaseFilled,
  GlobalOutlined,
  MailOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function Header() {
  const [headerColor, setHeaderColor] = useState("transparent");

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 500) {
        setHeaderColor("black");
      } else {
        setHeaderColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { Header } = Layout;

  return (
    // <div>
    //   <div className="header" style={{ backgroundColor: headerColor }}>
    //     <img style={{ marginTop: "0.2%" }} src="../titleimg.png"></img>
    //     <div className="logo">
    //       <div className="headerstyle">
    //         <Space style={{ marginBottom: "5%", justifyContent: "center" }}>
    //           <a
    //             href="https://harvarddigitalmarketing.com/"
    //             style={{
    //               textDecoration: "none",
    //             }}
    //           >
    //             Business
    //           </a>
    //           <a style={{ marginLeft: "100%" }}>Community</a>
    //           <a style={{ marginLeft: "100%" }}>AboutUs</a>
    //           <a style={{ marginLeft: "100%" }}>Careers</a>
    //         </Space>
    //         <Space
    //           style={{
    //             flexDirection: "row",
    //             marginTop: "2%",
    //             fontSize: "1.6rem",
    //             marginLeft: "",
    //           }}
    //         >
    //           <Tooltip placement="bottom" title="Worldwide">
    //             <GlobalOutlined style={{ marginLeft: "150%" }} />
    //           </Tooltip>
    //           <Tooltip placement="bottom" title="Contactus">
    //             <MailOutlined style={{ marginLeft: "150%" }} />
    //           </Tooltip>
    //         </Space>
    //       </div>
    //     </div>
    //     <Col xs={4} sm={10} md={15} lg={17}>
    //       <div className="mobileVisible">
    //         <Button
    //           style={{ backgroundColor: "#5b5b5b", border: 0 }}
    //           onClick={showDrawer}
    //           icon={<DatabaseFilled style={{ fontSize: "25px" }} />}
    //         ></Button>
    //       </div>
    //     </Col>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div className="header">
        <Header
          style={{ background: "transparent", backgroundColor: headerColor }}
        >
          <Row>
            <Col>
              <div className="logo">
                <img style={{ marginTop: "0.2%" }} src="../titleimg.png"></img>
              </div>
            </Col>
            <div className="mobileHidden">
              <Col className="headerstyle">
                <Space
                  style={{
                    margin: "10%",
                    fontSize: "1.4rem",
                  }}
                >
                  <a
                    href="https://harvarddigitalmarketing.com/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "80%",
                    }}
                  >
                    Business
                  </a>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "70%",
                    }}
                  >
                    Community
                  </a>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "120%",
                    }}
                  >
                    Aboutus
                  </a>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "150%",
                    }}
                  >
                    Careers
                  </a>
                  <Tooltip placement="bottom" title="Worldwide">
                    <GlobalOutlined
                      style={{ marginLeft: "600%", fontSize: "1.5rem" }}
                    />
                  </Tooltip>
                  <Tooltip placement="bottom" title="Worldwide">
                    <MailOutlined
                      style={{ marginLeft: "700%", fontSize: "1.5rem" }}
                    />
                  </Tooltip>
                </Space>
              </Col>
            </div>
            <Col xs={4} sm={10} md={15} lg={17}>
              <div className="mobileVisible">
                <Button
                  style={{ backgroundColor: "#5b5b5b", border: 0 }}
                  onClick={showDrawer}
                  icon={<DatabaseFilled style={{ fontSize: "25px" }} />}
                ></Button>

                <Drawer
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >
                  <span>Business</span>
                  <span>Community</span>
                  <span>AboutUs</span>
                  <span>Carrers</span>
                </Drawer>
              </div>
            </Col>
          </Row>
        </Header>
      </div>
    </div>
  );
}
export default Header;
