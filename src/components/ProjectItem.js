// import React from "react";

// const ProjectItem = ({ codingProjects }) => {
//   // console.log("from projectItem >>");
//   // console.log(codingProjects);

//   const eachProject = codingProjects.codingProjects.map((proj) => {
//     const {
//       id,
//       projectTitle,
//       shortDescription,
//       longDescription,
//       keywords,
//       tools,
//       source,
//       link,
//     } = proj;

//     console.log(source);

//     return (
//       <Carousel.Item interval={1000}>
//         <li className={`projectItem-wrapper proj-wrapper-${id}`} key={id}>
//           <a href={link}>
//             <img
//               src={`./images/${source}`}
//               alt={source}
//               className={`proj-img proj-image${id}`}
//             />
//           </a>
//           <Carousel.Caption>
//             <div className="proj-description">
//               <h3>
//                 <a href={link}>{projectTitle}</a>
//               </h3>
//               <h4>{shortDescription}</h4>
//               <h4>Keywords: {keywords}</h4>
//               <h4>Tools used: {tools}</h4>
//               <p>{longDescription}</p>
//             </div>
//           </Carousel.Caption>
//         </li>
//       </Carousel.Item>
//     );
//   });

//   return <React.Fragment>{eachProject}</React.Fragment>;
// };
// export default ProjectItem;

// Notes during coding

// ideas:

// do not forget:
// receive data information through parent projects, but deconstructed

// issues encountered:
// why need codingProjects.codingProjects.map to map??? why is it nested and if it is nested because of the levels it goes through then why isn't it nested deeper?

//====================

import React from "react";

const ProjectItem = ({ codingProjects }) => {
  // console.log("from projectItem >>");
  // console.log(codingProjects);
  const eachProject = codingProjects.codingProjects.map(
    ({
      id,
      projectTitle,
      shortDescription,
      longDescription,
      keywords,
      tools,
      source,
      link,
    }) => {
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
    }
  );

  return eachProject;
};
export default ProjectItem;

{
  /* <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>; */
}
