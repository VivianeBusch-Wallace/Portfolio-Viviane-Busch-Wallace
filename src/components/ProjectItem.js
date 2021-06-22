import React from "react";

const ProjectItem = ({ codingProjects }) => {
  // console.log("from projectItem >>");
  // console.log(codingProjects);

  const eachProject = codingProjects.codingProjects.map((proj) => {
    const {
      id,
      projectTitle,
      shortDescription,
      longDescription,
      keywords,
      tools,
      source,
      link,
    } = proj;

    console.log(source);

    return (
      <li className={`projectItem-wrapper proj-wrapper-${id}`} key={id}>
        <a href={link}>
          <img
            src={`./images/${source}`}
            alt={source}
            className={`proj-img proj-image${id}`}
          />
        </a>
        <div className="proj-description">
          <h3>
            <a href={link}>{projectTitle}</a>
          </h3>
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

// issues encountered:
// why need codingProjects.codingProjects.map to map??? why is it nested and if it is nested because of the levels it goes through then why isn't it nested deeper?
