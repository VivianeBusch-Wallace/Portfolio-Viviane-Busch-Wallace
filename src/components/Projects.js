import React from "react";

// importing ProjectItem
import ProjectItem from "./ProjectItem";

const Projects = ({ projFunc }) => {
  console.log({ projFunc });
  return (
    <div className="projects-wrapper">
      <ProjectItem proj={projFunc} />
    </div>
  );
};
export default Projects;

// Notes during coding

// ideas:
// https://reactjsexample.com/ultra-customizable-carousel-framework-for-react-js/

// do not forget:
// hover effect

// issues encountered:
// how to make an infinite gallery?
