import React, { useState, useEffect } from "react";

// importing ProjectItem
import ProjectItems from "../projects.json";
import ProjectItem from "./ProjectItem";

// import projects json (then send to ProjectItems through Projects)
// import CodingProjects from "./projects.json";

// fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// adding icons to fontawesome library
library.add(fas);

const Projects = () => {
  console.log("from projects >>");
  // console.log(codingProjects);
  // console.log(codingProjects.codingProjects[0]);

  // destructuring:
  // const arr = [...codingProjects.codingProjects]
  // << this will give me same as projects.json

  const codingProjects = ProjectItems;

  const [val, setVal] = useState(0);
  useEffect(() => {
    // let number = val;
  }, [val]);

  const arr = codingProjects;

  console.log(arr);

  return (
    <div className="section">
      <button onClick={() => setVal(val - 1)} disabled={val === 0}>
        <FontAwesomeIcon
          icon={["fas", "chevron-left"]}
          className="fontAwe prev"
          size="3x"
        />
      </button>

      <ul className="projects-wrapper">
        <ProjectItem codingProjects={arr[val]} />
      </ul>

      <button
        onClick={() => {
          setVal(val + 1);
          console.log(val);
        }}
        s
        disabled={arr.length === val + 1}
      >
        <FontAwesomeIcon
          icon={["fas", "chevron-right"]}
          className="fontAwe next"
          size="3x"
        />
      </button>
    </div>
  );
};

export default Projects;

// ==========================
// const [page, setPage] = useState(0);
// // const length = projArr.length;
// const length = 6; //6 projects

// //what happens on clicking arrow right
// const nextSlide = () => {
//   setPage(page === length - 1 ? 0 : page + 1);
// };

// //what happens on clicking arrow left
// const prevSlide = () => {
//   setPage(page === 0 ? length - 1 : page - 1);
// };

// if (!Array.isArray(ProjectItem) || ProjectItem.length <= 0) {
//   return null;
// }

// Notes during coding

// ideas:
// https://reactjsexample.com/ultra-customizable-carousel-framework-for-react-js/

// do not forget:
// hover effect

// issues encountered:
// how to make an infinite gallery?
//=====================================
// own carousel trial

// import React, { useState } from "react";

// // importing ProjectItem
// // import ProjectItem from "./ProjectItem";

// // fontawesome icons
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // adding icons to fontawesome library
// library.add(fas);

// const Projects = ({ codingProjects }) => {
//   console.log("from projects >>");
//   console.log(codingProjects);
//   // console.log(codingProjects.codingProjects);
//   console.log(typeof ProjectItem);
//   // console.log(ProjectItem);
//   const projArr = codingProjects.codingProjects.map(
//     ({
//       id,
//       projectTitle,
//       shortDescription,
//       longDescription,
//       keywords,
//       tools,
//       source,
//       link,
//     }) => {
//       return (
//         <li className={`projectItem-wrapper proj-wrapper-${id}`} key={id}>
//           <a href={link}>
//             <img
//               src={`./images/${source}`}
//               alt={source}
//               className={`proj-img proj-image${id}`}
//             />
//           </a>
//           <div className="proj-description">
//             <h3>
//               <a href={link}>{projectTitle}</a>
//             </h3>
//             <h4>{shortDescription}</h4>
//             <h4>Keywords: {keywords}</h4>
//             <h4>Tools used: {tools}</h4>
//             <p>{longDescription}</p>
//           </div>
//         </li>
//       );
//     }
//   );

//   console.log("projArr>>");

//   console.log(projArr);

//   const [page, setPage] = useState(0);
//   const length = projArr.length;

//   //what happens on clicking arrow right
//   const nextSlide = () => {
//     setPage(page === length - 1 ? 0 : page + 1);
//   };

//   //what happens on clicking arrow left
//   const prevSlide = () => {
//     setPage(page === 0 ? length - 1 : page - 1);
//   };

//   // if (!Array.isArray(ProjectItem) || ProjectItem.length <= 0) {
//   //   return null;
//   // }

//   return (
//     <div className="section">
//       <div className="proj-slider">
//         <FontAwesomeIcon
//           icon={["fas", "chevron-left"]}
//           className="fontAwe prev"
//           size="3x"
//           onClick={prevSlide}
//         />
//         <ul className="projects-wrapper">
//           {/* <ProjectItem codingProjects={codingProjects} /> */}
//           {projArr}
//         </ul>
//         <FontAwesomeIcon
//           icon={["fas", "chevron-right"]}
//           className="fontAwe next"
//           size="3x"
//           onClick={nextSlide}
//         />
//       </div>
//     </div>
//   );
// };
// export default Projects;

// ==================
// bootstrap carousel

// import React, { useState } from "react";

// // importing ProjectItem
// // import ProjectItem from "./ProjectItem";

// // importing bootstrap carousel
// import Carousel from "react-bootstrap/Carousel";

// // fontawesome icons
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // adding icons to fontawesome library
// library.add(fas);

// const Projects = ({ codingProjects }) => {
//   console.log("from projects >>");
//   // console.log(codingProjects);
//   // console.log(codingProjects.codingProjects);
//   console.log(typeof ProjectItem);
//   // console.log(ProjectItem);
//   const projArr = codingProjects.codingProjects.map(
//     ({
//       id,
//       projectTitle,
//       shortDescription,
//       longDescription,
//       keywords,
//       tools,
//       source,
//       link,
//     }) => {
//       return (
//         // <li className={`projectItem-wrapper proj-wrapper-${id}`} key={id}>
//         //   <a href={link}>
//         //     <img
//         //       src={`./images/${source}`}
//         //       alt={source}
//         //       className={`proj-img proj-image${id}`}
//         //     />
//         //   </a>
//         //   <div className="proj-description">
//         //     <h3>
//         //       <a href={link}>{projectTitle}</a>
//         //     </h3>
//         //     <h4>{shortDescription}</h4>
//         //     <h4>Keywords: {keywords}</h4>
//         //     <h4>Tools used: {tools}</h4>
//         //     <p>{longDescription}</p>
//         //   </div>
//         // </li>
//         <Carousel.Item interval={1000}>
//           <li className={`projectItem-wrapper proj-wrapper-${id}`} key={id}>
//             {/* <a href={link}> */}
//             <img
//               src={`./images/${source}`}
//               alt={source}
//               className={`proj-img proj-image${id}`}
//             />
//             {/* </a> */}
//             <Carousel.Caption>
//               <div className="proj-description">
//                 <h3>
//                   <a href={link}>{projectTitle}</a>
//                 </h3>
//                 <h4>{shortDescription}</h4>
//                 <h4>Keywords: {keywords}</h4>
//                 <h4>Tools used: {tools}</h4>
//                 <p>{longDescription}</p>
//               </div>
//             </Carousel.Caption>
//           </li>
//         </Carousel.Item>
//       );
//     }
//   );

//   console.log("projArr>>");

//   console.log(projArr);

//   const [page, setPage] = useState(0);
//   const length = projArr.length;

//   //what happens on clicking arrow right
//   const nextSlide = () => {
//     setPage(page === length - 1 ? 0 : page + 1);
//   };

//   //what happens on clicking arrow left
//   const prevSlide = () => {
//     setPage(page === 0 ? length - 1 : page - 1);
//   };

//   // if (!Array.isArray(ProjectItem) || ProjectItem.length <= 0) {
//   //   return null;
//   // }

//   return (
//     <div className="section">
//       <div className="proj-slider">
//         <FontAwesomeIcon
//           icon={["fas", "chevron-left"]}
//           className="fontAwe prev"
//           size="3x"
//           onClick={prevSlide}
//         />
//         <ul className="projects-wrapper">
//           {/* <ProjectItem codingProjects={codingProjects} /> */}
//           <Carousel>{projArr}</Carousel>
//         </ul>
//         <FontAwesomeIcon
//           icon={["fas", "chevron-right"]}
//           className="fontAwe next"
//           size="3x"
//           onClick={nextSlide}
//         />
//       </div>
//     </div>
//   );
// };
// export default Projects;
