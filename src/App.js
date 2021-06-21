import React, { useState, useEffect } from "react";

// importing components
import Loading from "./components/Loading";
import Components from "./components/Components";

// import projects json (then send to ProjectItems through Projects)
import CodingProjects from "./projects.json";

function App(props) {
  console.log("from App >>");
  // console.log(process.env.PUBLIC_URL);
  // console.log(CodingProjects);
  console.log(props);
  // setting up loading page
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) return <Loading />;

  return <Components codingProjects={CodingProjects} />;
}

export default App;

// old version >>
// const navAnchors = ["Home", "About", "My Work", "Contact"];

// const App = () => (
//   <ReactFullpage
//     //fullpage options
//     // licenseKey={"YOUR_KEY_HERE"}
//     // my key is "personal use"
//     scrollingSpeed={1500} /* Options here */
//     navigation
//     navigationTooltips={navAnchors}
//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//           {/* <Navigation /> */}
//           <Loading />
//           <Home />
//           <About />
//           <Projects codingProjects={CodingProjects} />
//           <Contact />
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );
// export default App;

// ==============================================================
// Notes during coding >>

// ideas:
// general plan is to have cool scroll effect

// do not forget:
// when send props write route differently

// issues encountered:
// <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> this URL did not work, although it should work for both deployed and developer version as Hadi said!?
// destructing projects with space in the key does not work > temp solution: make it one word

// adding Loading page with effects not possible because where to put?
// const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);
//   if (loading) return <Loading />;

// What I have learned:
// It is more difficult to code everything first and then see that there is an issue
// start npm asap so that you can see issues immediately
// resolving problems later is more difficult because it is not clear where they come from, but if you change just one thing and then check
// then you know it was that

//  "_homepage": "https://vivianebusch-wallace.github.io/Portfolio-Viviane-Busch-Wallace/",
