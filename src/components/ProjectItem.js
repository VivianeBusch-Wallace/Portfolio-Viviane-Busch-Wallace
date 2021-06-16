import React from "react";

const ProjectItem = ({ proj }) => {
  const {
    id,
    projectTitle,
    shortDescription,
    longDescription,
    specialFeatures,
    tools,
    source,
  } = proj;
  console.log({ proj });
  console.log({ id });
  console.log({ projectTitle });
  console.log(proj.projectTitle);

  return <div className="projectItem-wrapper">PROJECTItem</div>;
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
