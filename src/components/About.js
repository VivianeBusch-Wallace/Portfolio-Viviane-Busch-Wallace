import React from "react";

// importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// adding icons to fontawesome library
library.add(fab, fas);

const About = () => {
  return (
    <div className="section">
      <div className="about-wrapper">
        <h3>About me</h3>
        <div className="about-me">
          <div className="profile-pic">
            <img
              src="./images/Viviane-Busch-Wallace.jpg"
              alt="pic-of-Viviane"
              className="viviane"
            />
          </div>
          <p>
            I am 31 years old and live in Hamburg, Germany. As a German - who is
            also half Chinese - I decided to spend some time in China after
            graduating from college to get my Bachelor's degree in Marketing and
            Business Administration. I actually spent several years there
            studying and working as an English teacher. Because of my
            multicultural background I speak English and German on a regular
            basis and I am also fluent in Chinese.
          </p>
        </div>
        <div className="learning-journey">
          <p>
            As a learner of software engineering I love to work with animations
            like with Sass or CSS, and Javascript to create websites with great
            UI/UX design. I want to give the user an enjoyable experience while
            browsing the web. Right now I am working on my web development
            skills studying at the Digital Career Institute. But I am eager to
            learn more and hope to continue my journey even after this course.
          </p>
        </div>
        <div className="skills-wrapper">
          <div className="work-skills">
            <FontAwesomeIcon
              icon={["fab", "react"]}
              className="fontAwe react"
              size="7x"
            />

            <FontAwesomeIcon
              icon={["fab", "js-square"]}
              className="fontAwe js"
              size="7x"
            />

            <FontAwesomeIcon
              icon={["fab", "sass"]}
              className="fontAwe sass"
              size="7x"
            />
            <FontAwesomeIcon
              icon={["fab", "css3-alt"]}
              className="fontAwe css"
              size="7x"
            />
            <FontAwesomeIcon
              icon={["fab", "html5"]}
              className="fontAwe html"
              size="7x"
            />
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              className="fontAwe bootstrap"
              size="7x"
            />
            <FontAwesomeIcon
              icon={["fas", "pencil-ruler"]}
              className="fontAwe drawing"
              size="7x"
            />
          </div>
        </div>
        {/* <div className="cv-download-wrapper">
          <a href="#CV" download>
            Download Viviane's Resume
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default About;

//safety copies
// giphy div style
// style="width:100%;height:0;padding-bottom:69%;position:relative;"
// style="position:absolute"

// source of squirrel giphy: https://giphy.com/gifs/squirrel-eden-l2JI2G6JqnSz8uEOk
