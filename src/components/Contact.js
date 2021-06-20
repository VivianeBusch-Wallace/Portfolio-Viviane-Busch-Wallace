import React from "react";

// // ReactFullpage
// import ReactFullpage from "@fullpage/react-fullpage";

// importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import {
//   faCheckSquare,
//   faCoffee,
//   faBell,
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// adding icons to fontawesome library
library.add(fab, far, faPhone);

const Contact = () => {
  return (
    <div className="section">
      <div className="contact-wrapper">
        {
          // social media contact with links
        }
        <div className="holler-phone-wrapper">
          <h2>Give me a holler! </h2>
          <FontAwesomeIcon
            icon={["fas", "phone"]}
            size="lg"
            className="fontAwe phone"
          />
        </div>
        <div className="social-media-form-wrapper">
          <div className="social-media">
            <div class="social-media icon-wrapper">
              <div class="icon">
                <a href="https://github.com/VivianeBusch-Wallace">
                  <FontAwesomeIcon
                    icon={["fab", "github-square"]}
                    className="fontAwe github"
                  />
                </a>
              </div>
              <div class="icon">
                <a
                  href="https://www.linkedin.com/in/viviane-busch-wallace-68a117179/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="fontAwe linkedIn"
                  />
                </a>
              </div>
              <div class="icon">
                <a
                  href="https://www.xing.com/profile/VivianeWei_BuschWallace/cv"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "xing-square"]}
                    className="fontAwe xing"
                  />
                </a>
              </div>
              <div class="icon">
                <a
                  href="https://instagram.com/vivianewallaceart"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram-square"]}
                    className="fontAwe insta"
                  />
                </a>
              </div>
            </div>
          </div>
          {
            // contact form
          }
          <form>
            <div className="input-wrapper">
              <div className="fn-wrapper">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="ln-wrapper">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="email-wrapper">
                <label for="email">E-mail Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail address"
                  required
                />
              </div>
            </div>
            <div className="textarea-submit-wrapper">
              <textarea placeholder="Message..." required></textarea>
              <button type="submit" className="submit-btn">
                Submit{" "}
                <FontAwesomeIcon
                  icon={["far", "paper-plane"]}
                  className="fontAwe plane"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
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
// cannot put contact-wrapper into section div, it for some reason disappears
