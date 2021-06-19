import React, { useState, useEffect } from "react";
// ReactFullpage
import ReactFullpage from "@fullpage/react-fullpage";
// react router
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing all components
// import Loading from "./components/Loading";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Loading from "./Loading";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

// import projects json (then send to ProjectItems through Projects)
// import CodingProjects from "../projects.json";

const navAnchors = ["Home", "About", "My Work", "Contact"];

const Components = (codingProjects) => (
  <ReactFullpage
    //fullpage options
    // licenseKey={"YOUR_KEY_HERE"}
    // my key is "personal use"
    scrollingSpeed={1500} /* Options here */
    navigation
    navigationTooltips={navAnchors}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* <Navigation /> */}
          {/* <Loading /> */}
          <Home />
          <About />
          <Projects codingProjects={codingProjects} />
          <Contact />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Components;

// Notes during coding

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
