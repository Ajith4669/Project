import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Figure } from "react-bootstrap";
import { RightOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

const { Meta } = Card;
function Feature() {
  return (
    <div className="bgBlack">
      <div className="container-fluid">
        <Row gutter={[42, 32]}>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div style={{ marginTop: "5%" }}>
                    <img src="" />
                  </div>
                  OXFORD MIGRATION
                </p>
              </div>

              <div>
                <a href="https://oxfordmigration.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>

          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building1.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img src="../om.jpg" />
                  </div>
                  OXFORD MIGRATION
                </p>
              </div>

              <div>
                <a href="https://oxfordmigration.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>

          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building2.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  HARDVARD SCHOOL OF DIGITAL MARKETING
                </p>
              </div>

              <div>
                <a href="https://harvarddigitalmarketing.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building3.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div style={{ fontSize: "20px" }}>
                    <img src="../sooty.png" />
                  </div>
                  SOOTY SCHOOL OF LANGUAGE
                </p>
              </div>

              <div>
                <a href=" https://sootylanguages.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building4.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">NINTH PLANET REALITY</p>
              </div>

              <div>
                <a href=" ">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building5.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">VIOLA SILKS</p>
              </div>

              <div>
                <a href=" https://violasilks.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../finance1.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">SWISS CREDIT</p>
              </div>

              <div>
                <a href="https://swisscredit.in/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building7.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">CAFE CHI</p>
              </div>

              <div>
                <a href=" https://cafeche.shop/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Feature;
