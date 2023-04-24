import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
        className="typed-text"
        strings={["Web Design", "API" , "Ruby" , "Rails" , "React" ,"Bootstrap", "Jira", "Figma" ,"Heroku", "Scalingo", "PostgreSQL"] }
        typeSpeed={40}
        backSpeed={60}
        loop/>
        <a href="" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
