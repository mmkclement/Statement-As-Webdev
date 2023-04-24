import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faCode,
  faTowerBroadcast,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div className="services">
      <h1 className="py-5">My services with pleasure</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPencil}
                    spin
                    style={{ color: "#481e57" }}
                    size="2x"
                  />
                </div>
                <h3>Web design</h3>
                <p>
                  I create visually appealing and user-friendly websites that
                  effectively communicate your brand and message.
                </p>
              </div>
            </div>
            {/* */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon
                  icon={faCode}
                  beat
                  style={{ color: "#481e57" }}
                  size="2x"
                />
                <h3>Web development</h3>
                <p>
                  I build robust and scalable web applications using the latest
                  technologies and best practices.
                </p>
              </div>
            </div>
            {/* */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon
                  icon={faTowerBroadcast}
                  beat
                  style={{ color: "#481e57" }}
                  size="2x"
                />
                <h3>Tech consultant </h3>
                <p>
                  I provide expert advice and guidance on various
                  technology-related issues, helping individuals and businesses
                  make informed decisions and achieve their goals.
                </p>
              </div>
            </div>
            {/* */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon
                  icon={faCompactDisc}
                  spin
                  style={{ color: "#481e57" }}
                  size="2x"
                />
                <h3>Audio Design</h3>
                <p>
                  I craft immersive and engaging soundscapes for various media
                  such as documentary, films, and museum (MacVal museum Paris,
                  Monnaie Museum Paris ).
                </p>
              </div>
            </div>
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
