import React from "react";

// importing carousel API
import Carousel from "react-elastic-carousel";

// importing ProjectItem
import ProjectItem from "./ProjectItem";

const Projects = ({ codingProjects }) => {
  console.log("from projects >>");
  // console.log(codingProjects);
  // console.log(codingProjects.codingProjects);

  return (
    <div className="section">
      <ul className="projects-wrapper">
        <Carousel itemsToShow={1}>
          <ProjectItem codingProjects={codingProjects} />
        </Carousel>
      </ul>
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
