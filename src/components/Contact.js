import React from "react";

// importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// import {
//   faCheckSquare,
//   faCoffee,
//   faBell,
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// adding icons to fontawesome library
library.add(fab, far);

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {
        // social media contact with links
      }
      <div className="social-media">
        <h3>
          Give me a holler! <FontAwesomeIcon icon={["far", "bell"]} />
        </h3>
        <div class="social-media icon-container">
          <div class="icon">
            <a href="https://github.com/VivianeBusch-Wallace">
              <FontAwesomeIcon icon={["fab", "github-square"]} />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.linkedin.com/in/viviane-busch-wallace-68a117179/"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.xing.com/profile/VivianeWei_BuschWallace/cv"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "xing-square"]} />
            </a>
          </div>
          <div class="icon">
            <a href="https://instagram.com/vivianewallaceart" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram-square"]} />
            </a>
          </div>
        </div>
      </div>
      {
        // contact form
      }
      <form>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" placeholder="Your first name" />

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" placeholder="Your last name" />

        <label for="email">Last Name</label>
        <input type="email" id="email" placeholder="Your e-mail address" />

        <textarea placeholder="Write me..."></textarea>

        <FontAwesomeIcon icon={["far", "paper-plane"]} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contact;

// Notes during coding

// ideas:
// styling textarea: resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */

// do not forget:
// hover effect on button!
// hover zoom on icons
// clean up code

// issues encountered:
// cannot add fa icon to button
// fa has to be imported into every component, although otherwise said > solution add to app and send as prop???
