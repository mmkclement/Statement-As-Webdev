import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <div className="pulser">
          {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth= {true} to="home"  offset={-110} className="nav-link" href="#">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link  smooth= {true} to="about" offset={-110} className="nav-link" href="#">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link  smooth= {true} to="services" offset={-110} className="nav-link" href="#">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link  smooth = {true} to="experiences" offset={-110} className="nav-link" href="#">
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link  smooth = {true} to="feedback" offset={-110} className="nav-link" href="#">
                Feedbacks
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth = {true} to="contacts"  offset={-110}className="nav-link" href="#">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
