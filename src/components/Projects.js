import React from "react";

// importing ProjectItem
import ProjectItem from "./ProjectItem";

const Projects = ({ codingProjects }) => {
  console.log("from projects >>");
  // console.log(codingProjects);

  return (
    <div className="section">
      <div className="projects-wrapper">
        <ProjectItem codingProjects={codingProjects} />
      </div>
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

// aborted ideas:
// { projFunc }
//   console.log({ projFunc });
//  proj={projFunc}
