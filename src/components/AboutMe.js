import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>Orsolya Sütő</h2>
        <img
          id="profile-pic"
          src="Sorsi-about.png"
          alt="profile"
          style={{ height: "250px" }}
        />
        <p id="intro">
          Welcome on my website! From February of 2018 I'm working on my
          webdeveloper skills. Watched a lot of online videos and courses
          (Youtube, Udemy, Codeacademy...) On 12th October 2018 graduated at
          Green Fox Academy and got my certification from software development.
          Now I'm a junior Full Stack Web Developer using MEAN (MongoDB,
          Express.js, AngularJS, and Node.js) or MERN (MongoDB, Express, React,
          Node.js) stack,Redux, RESTful APIs, MySQL/PostgreSQL, Lodash, Express,
          Bootstrap, Ant Design, SASS, LESS
        </p>
      </div>
    );
  }
}

export default About;
