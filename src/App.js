import React from "react";
// ReactFullpage
import ReactFullpage from "@fullpage/react-fullpage";
// react router
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing all components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// import projects json (then send to ProjectItems through Projects)
import CodingProjects from "./projects.json";

// function App() {
//   console.log("from App >>");
//   // console.log(process.env.PUBLIC_URL);
//   // console.log(CodingProjects);

//   return (
//     <Router>
//       <Navigation />
//       <Switch>
//         {
//           // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
//         }
//         <Route path="/" exact component={Home} />
//         <Route path="/about" exact component={About} />
//         <Route
//           path="/projects"
//           exact
//           component={() => <Projects codingProjects={CodingProjects} />}
//         />
//         <Route path="/contact" exact component={Contact} />
//         {/* this ensures that any url which is not given and is typed in manually will show the homepage as default => */}
//         <Route path={() => "/main" || "/anything"}>
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

const navAnchors = ["Home", "About", "My Work", "Contact"];

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1500} /* Options here */
    navigation
    navigationTooltips={navAnchors}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* <Navigation /> */}
          {/* <div className="section"> */}
          {/* <Route path="/" exact component={Home} /> */}
          <Home />
          {/* </div> */}
          {/* <div className="section"> */}
          {/* <Route path="/about" exact component={About} /> */}
          <About />
          {/*</div>
           <div className="section"> */}
          {/* <Route path="/contact" exact component={Contact} /> */}
          <Projects codingProjects={CodingProjects} />
          <Contact />
          {/*</div>*/}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default App;

// Notes during coding

// ideas:
// general plan is to have cool scroll effect

// do not forget:
// when send props write route differently

// issues encountered:
// <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> this URL did not work, although it should work for both deployed and developer version as Hadi said!?
// destructing projects with space in the key does not work > temp solution: make it one word

// rejected ideas:
// passing data through App into a route, from route into child is too complicated, it is not impressive, it's just stupid

// // mapping through json file for projects
// const projectItem = CodingProjects.map((proj) => {
//   proj;
//   console.log(proj);
// });
//  projFunc={projectItem}
// instead I just import projects.json directly into ProjectItem

// What I have learned:
// It is more difficult to code everything first and then see that there is an issue
// start npm asap so that you can see issues immediately
// resolving problems later is more difficult because it is not clear where they come from, but if you change just one thing and then check
// then you know it was that

//  "_homepage": "https://vivianebusch-wallace.github.io/Portfolio-Viviane-Busch-Wallace/",
