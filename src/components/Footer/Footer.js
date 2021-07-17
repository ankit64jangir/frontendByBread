import React from "react";
import "./Footer.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import tweetLogo from "../../assets/icons8-twitter 3.png";

function Footer() {
  return (
    // <div className="stickyFooter"></div>
    <footer className="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 footer-column">
            <div class="row">
              <div class="col col-lg-2">
                {" "}
                <img alt="" src={tweetLogo} width="50" height="50" />
              </div>
              <div class="col-md-auto">
                <h1 className="rewindcolor">My Twitter Яewind</h1>

                <h6 className="footercrumb">
                  A <span>🍞Bread</span> crumb
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 footer-column">
            <ul class="nav flex-column">
              <li class="nav-item">
                <strong>Company</strong>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Job postings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  News and articles
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 footer-column">
            <ul class="nav flex-column">
              <li class="nav-item">
                <strong>Contact & Support</strong>
              </li>
              <li class="nav-item">
                <span class="nav-link">
                  <i class="fas fa-phone"></i>+91 xxxxxxxxxx
                </span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-comments"></i>Live chat
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-envelope"></i>Contact us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-star"></i>Give feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <h2 className="earlyAccess">
            Get early access for bread <i class="fas fa-arrow-right"></i>
          </h2>
        </div>

        <div class="row text-center">
          <div class="col-md-4 box">
            <strong class="copyright" style={{ color: "#2AA3EF" }}>
              Copyright &copy; Tweets from Home
            </strong>
          </div>
          <div class="col-md-4 box">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 box">
            <ul class="list-inline quick-links">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
