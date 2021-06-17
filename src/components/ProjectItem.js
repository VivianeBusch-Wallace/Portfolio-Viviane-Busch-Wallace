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
        <img src={`./images/${source}`} alt={source} />
        <h3>{projectTitle}</h3>
        <h4>{shortDescription}</h4>
        <h4>Keywords: {keywords}</h4>
        <h4>Tools used: {tools}</h4>
        <p>{longDescription}</p>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul className="projectItem-wrapper">{eachProject}</ul>
    </React.Fragment>
  );
};
export default ProjectItem;

// Notes during coding

// ideas:

// do not forget:
// receive data information through parent projects, but deconstructed
// test if image source works as json property or if need individual import

// issues encountered:
// where best to deconstruct proj?, here or parent or App?
// why project stuff undefined?
// cannot send through two levels of components???
