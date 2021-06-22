import React from "react";
// import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;

// ====================
// old link and route style

//    import React from "react";
// import { Link } from "react-router-dom";
// const Navigation = () => {
//   return (
//     <nav>
//       <ul className="navigation">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/projects">Projects</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Navigation;
