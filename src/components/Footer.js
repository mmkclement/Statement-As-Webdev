import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  RedditShareButton,
  RedditIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> Rue Carducci 75019 , Paris </p>
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
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7049685248724357120/"
                }
                quote={"Fullstack Seveloper"}
                hashtag="#Iwannashowmycode"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7049685248724357120/"
                }
                quote={"Fullstack Seveloper"}
                hashtag="#Iwannashowmycode"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7049685248724357120/"
                }
                quote={"Fullstack Seveloper"}
                hashtag="#Iwannashowmycode"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7049685248724357120/"
                }
                quote={"Fullstack Seveloper"}
                hashtag="#Iwannashowmycode"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;MMK aka Clement| All right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
