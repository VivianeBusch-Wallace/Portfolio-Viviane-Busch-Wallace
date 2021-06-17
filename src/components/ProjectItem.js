import React from "react";

const ProjectItem = ({ codingProjects }) => {
  console.log("from projectItem >>");
  //   console.log(codingProjects);

  const eachProject = codingProjects.map((proj) => {
    const {
      id,
      projectTitle,
      shortDescription,
      longDescription,
      keywords,
      tools,
      source,
    } = proj;

    console.log(source);

    return (
      <li className="projectItem-wrapper" key={id}>
        <img src={`./images/${source}`} alt={source} className="proj-image" />
        <div className="proj-description">
          <h3>{projectTitle}</h3>
          <h4>{shortDescription}</h4>
          <h4>Keywords: {keywords}</h4>
          <h4>Tools used: {tools}</h4>
          <p>{longDescription}</p>
        </div>
      </li>
    );
  });

  return <React.Fragment>{eachProject}</React.Fragment>;
};
export default ProjectItem;

// Notes during coding

// ideas:

// do not forget:
// receive data information through parent projects, but deconstructed
// test if image source works as json property or if need individual import

// issues encountered:
