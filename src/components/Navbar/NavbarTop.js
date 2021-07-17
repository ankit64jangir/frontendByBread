import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "./NavbarTop.css";
import appLogo from "../../assets/tweetLogo.png";

function NavbarTop() {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Row>
            <Col>
              <img
                alt=""
                src={appLogo}
                width="50"
                height="50"
              />
            </Col>
            <Col>
              <Navbar.Brand href="#home" style={{ color: "#00C3E6" }}>
                <strong>Tweets from Home</strong>
              </Navbar.Brand>
              <br />
              <h6 className="crumb">
                A <span>🍞Bread
                </span> crumb
              </h6>
            </Col>
          </Row>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <button
              type="button"
              className="btn btn-light"
              style={{ borderRadius: "30px", backgroundColor: "#fff" }}
            >
              Sign In
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary"
              style={{
                borderRadius: "30px",
                backgroundImage: "linear-gradient(to right,#1F7FE5, #2AA3EF)",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              Home
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
