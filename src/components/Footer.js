import React from "react";
import {  FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,LinkedinIcon,LinkedinShareButton} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Paris Rue Carducci 75019</p>
            </div>
            <div className="d-flex">
              <a href="tel: 0695505394"> +33 6 95 50 53 94</a>
            </div>
            <div className="d-flex">
              <p>maungmaungkha18290@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="" className="footer-nav">
                  Aboutme
                </a>
                <br />
                <a href="" className="footer-nav">
                  Service
                </a>
                <br />
              </div>
              <div className="col">
                <a href="" className="footer-nav">
                  Experiences
                </a>
                <br />
                <a href="" className="footer-nav">
                  TextFromLove{" "}
                </a>
                <br />
                <a href="" className="footer-nav">
                  contact
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
