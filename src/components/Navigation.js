import React from "react";
const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
        <li>
          <link to="/projects">Projects</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
