import React from "react";

// importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// adding icons to fontawesome library
library.add(fab, far, faPhone);

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
            I am 31 years old and live in Hamburg, Germany. Born and raised in
            Germany to a German father and a Chinese mother, after graduating
            High School I decided to go study in my mom's hometown in Shanghai,
            China. I actually spent about 6 years there studying Chinese and
            working as an English teacher. I met my husband and a couple years
            ago we returned to Germany to get married. Now I am working on my
            web development skills, learning Javascript, HTML, CSS, and more at
            the Digital Career Institute.
          </p>
        </div>
        <div className="skills-wrapper">
          <div className="skill-levels">
            <h4>My language skills</h4>
            <label for="German">German</label>
            <div className="skill-bar">
              <div className="lang German"></div>
            </div>
            <label for="English">English</label>
            <div className="skill-bar">
              <div className="lang English"></div>
            </div>
            <label for="Chinese">Chinese</label>
            <div className="skill-bar">
              <div className="lang Chinese"></div>
            </div>
            <label for="Spanish">Spanish</label>
            <div className="skill-bar">
              <div className="lang Spanish"></div>
            </div>
          </div>
          <div className="work-skills">
            {/* <i className="fab fa-js-square"></i>
            <span className="hover-text js">JavaScript</span>
            <i className="fab fa-css3-alt"></i>
            <span className="hover-text css">CSS</span>
            <i className="fab fa-html5"></i>
            <span className="hover-text html">HTML5</span>
            <i className="fas fa-file-word"></i>
            <span className="hover-text word">Word</span>
            <i className="fas fa-file-excel"></i>
            <span className="hover-text excel">Excel</span>
            <i className="fas fa-file-powerpoint"></i>
            <span className="hover-text ppt">Sass</span> */}
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
