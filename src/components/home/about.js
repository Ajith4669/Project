import Link from "antd/es/typography/Link";
import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
function About() {
  return (
    <div className="bgBlack">
      <div
        style={{
          flexDirection: "column",
          marginRight: "50%",
          color: "white",
          fontSize: "20%",
        }}
      >
        <a
          className="icon icon__new"
          style={{ color: "white", fontSize: "2rem" }}
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
        >
          <TwitterOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "white", fontSize: "2rem" }}
          href="https://www.facebook.com/login"
        >
          <FacebookOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "white", fontSize: "2rem" }}
          href="https://www.youtube.com/"
        >
          <YoutubeOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "white", fontSize: "2rem" }}
          href="https://www.linkedin.com/company/orb25-digitalworld/"
        >
          <LinkedinOutlined />
        </a>
      </div>
      <div className="container">
        <div className="title">
          <h1>Group Of Companies</h1>
        </div>
        <div className="container">
          <div className="code">
            <p style={{ fontSize: "4.7rem" }}>F</p>
            <h1 style={{ marginLeft: "4%", marginTop: "-11%" }}>
              ounded by
              <Link>
                <u>Jamsetji Tata </u>
              </Link>
              in 1868, the Tata group is a global enterprise, headquartered in
              India, comprising 30 companies across ten verticals.
            </h1>
            <br />
            <p>
              The group operates in more than 100 countries across six
              continents, with a mission 'To improve the quality of life of the
              communities we serve globally, through long-term stakeholder value
              creation based on Leadership with Trust.
            </p>
            <p>
              <Link>
                <u>Tata Sons </u>
              </Link>
              is the principal investment holding company and promoter of Tata
              companies. Sixty-six percent of the equity share capital of Tata
              Sons is held by philanthropic trusts, which support education,
              health, livelihood generation and art and culture.
            </p>
            <p>
              In 2021-22, the revenue of Tata companies, taken together, was
              $128 billion (INR 9.6 trillion). These companies collectively
              employ over 935,000 people.
            </p>
            <p>
              Each Tata company or enterprise operates independently under the
              guidance and supervision of its own board of directors. There are
              29 publicly-listed Tata enterprises with a combined market
              capitalisation of $311 billion (INR 23.6 trillion) as on March 31,
              2022.
            </p>
            <p>Companies include</p>
            <Link>
              <u>
                Tata Consultancy Services, Tata Motors Tata Steel, Tata
                Chemicals, Tata Consumer Products, Titan, Tata Capital, Tata
                Power, Indian Hotels, Tata Communications, Tata Digital,
              </u>
              <p>and Tata Electronics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
