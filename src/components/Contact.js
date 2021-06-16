import React from "react";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <form>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" placeholder="Your name.." />

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" placeholder="Your last name.." />

        <textarea placeholder="Write me..."></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contact;
