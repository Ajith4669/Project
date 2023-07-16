import React from "react";
import { Carousel } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="dashboardBlock">
      <Carousel
        style={{ backgroundColor: "black", height: "100%", width: "100%" }}
        autoplay
        autoplaySpeed={800}
      >
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Mercury
          </h1>
          <img src="../mercury1.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Venus
          </h1>
          <img src="../venus.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Earth
          </h1>
          <img src="../earth1.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Mars
          </h1>
          <img src="../mars.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Jupitor
          </h1>
          <img src="../jupitor.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Saturn
          </h1>
          <img src="../saturn.jpg"></img>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}>
            Uranus
          </h1>
          <img src="../uranus.jpg"></img>
        </div>
        <div>
          <h1
            style={{
              color: "#936B09",
              marginTop: "5%",
              fontSize: "2.5rem",
              marginLeft: "60%",
            }}
          >
            Change The Impossible
          </h1>
          <img
            src="lanran1.gif"
            typeof="gif"
            style={{
              marginLeft: "40%",
              marginTop: "2%",
              blockSize: "60%",
            }}
          ></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Dashboard;
