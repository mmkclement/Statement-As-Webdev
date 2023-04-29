import React from "react";
import author from "../aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-12 col-sm-6 col-lg-6">
          <div className="photo-wrap mb-5">
          <img className="profile-img " src={author} alt="author..." />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-6">
          <h1 className="about-heading">About me</h1>
          <p>
            I am a junior full-stack developer with a passion for creating
            functional and visually appealing web applications. Having recently
            completed a web development course at Le Wagon, I have gained
            experience in various technologies such as Ruby on Rails,
            JavaScript, React, Next, PostgreSQL, Active Record, Heroku, and
            more. Prior to my transition into web development, I provided IT
            helpdesk support at a startup enterprise, which helped me develop
            strong problem-solving skills, attention to detail, and the ability
            to work well under pressure. I also learned how to communicate
            effectively with both technical and non-technical stakeholders, a
            skill that I believe will be invaluable in my future work as a
            developer. At Le Wagon, I worked on several projects that challenged
            me to think creatively, work collaboratively with my peers, and
            learn how to debug and troubleshoot issues that arose during
            development. One of my favourite projects involved building a
            medical treatment save doc and appointment for doctor using Ruby on
            Rails, JavaScript, and API (Mapbox). I am excited about the
            opportunity to bring my technical expertise, strong work ethic, and
            dedication to continuous learning to your team. I am committed to
            delivering high-quality work and taking on new challenges. I am
            confident that my skills and passion for web development would make
            me a valuable asset to your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
