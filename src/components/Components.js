// import React, { useState, useEffect } from "react";
import React from "react";
// ReactFullpage
// import ReactFullpage from "@fullpage/react-fullpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
// import GallerySlider from "./GallerySlider";

// importing all components
import Navigation from "./Navigation";

const Components = (codingProjects) => {
  // useEffect();

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/projects"
            exact
            component={() => <Projects codingProjects={codingProjects} />}
          />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path={() => "/main" || "/anything"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Components;

//-------
// <React.Fragment>
//   <Home />
//   <About />
//   <Projects codingProjects={codingProjects} />
//   <GallerySlider />
//   <Contact />
// </React.Fragment>

// <ReactFullpage
//   //fullpage options
//   licenseKey={"YOUR_KEY_HERE"}
//   // my key is: "personal use", which is free
//   scrollingSpeed={1500} /* Options here */
//   // autoScrolling={true}
//   // scrollHorizontally={true}
//   navigation
//   navigationTooltips={navAnchors}
//   render={({ state, fullpageApi }) => {
//     return (
//       <ReactFullpage.Wrapper>
//         {/* <Navigation /> */}
//         {/* <Home /> */}
//         {/* <About /> */}
//         {/* <Projects codingProjects={codingProjects} /> */}
//         <GallerySlider />
//         {/* <Contact /> */}
//       </ReactFullpage.Wrapper>
//     );
//   }}
// />

// Notes during coding

// ideas:
// general plan is to have cool scroll effect

// do not forget:
// when send props write route differently

// issues encountered:
// <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> this URL did not work, although it should work for both deployed and developer version as Hadi said!?
// destructing projects with space in the key does not work > solution: make it one word
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

// cannot get free license key until I know where this is deployed: https://alvarotrigo.com/fullPage/extensions/requestKey.html

//========================================

// // import React, { useState, useEffect } from "react";
// // ReactFullpage
// import ReactFullpage from "@fullpage/react-fullpage";

// // importing all components
// import Navigation from "./Navigation";
// import Home from "./Home";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import GallerySlider from "./GallerySlider";

// const navAnchors = ["Home", "About", "My Work", "Contact"];

// const Components = (codingProjects) => {
//   // useEffect();

//   return (
//     <ReactFullpage
//       //fullpage options
//       // licenseKey={"YOUR_KEY_HERE"}
//       // my key is: "personal use", which is free
//       scrollingSpeed={1500} /* Options here */
//       // autoScrolling={true}
//       // scrollHorizontally={true}
//       navigation
//       navigationTooltips={navAnchors}
//       render={({ state, fullpageApi }) => {
//         return (
//           <ReactFullpage.Wrapper>
//             {/* <Navigation /> */}
//             {/* <Home /> */}
//             {/* <About /> */}
//             {/* <Projects codingProjects={codingProjects} /> */}
//             <GallerySlider />
//             {/* <Contact /> */}
//           </ReactFullpage.Wrapper>
//         );
//       }}
//     />
//   );
// };

// export default Components;
