import React from "react";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="social-media">
        <h3>Contact me!</h3>
        <p>Have questions? Wanna chat? This is where you can find me:</p>
        <div class="social-media icon-container">
          <div class="icon">
            <a href="https://github.com/VivianeBusch-Wallace">
              <i class="fab fa-github-square"></i>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.linkedin.com/in/viviane-busch-wallace-68a117179/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.xing.com/profile/VivianeWei_BuschWallace/cv"
              target="_blank"
            >
              <i class="fab fa-xing-square"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://instagram.com/vivianewallaceart" target="_blank">
              <i class="fab fa-instagram-square"></i>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.facebook.com/vivianebuschwallace"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
      <form>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" placeholder="Your first name" />

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" placeholder="Your last name" />

        <label for="email">Last Name</label>
        <input type="email" id="email" placeholder="Your e-mail address" />

        <textarea placeholder="Write me..."></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contact;
