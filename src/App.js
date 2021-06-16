import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing all components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// import projects json (then map and send to projects component)
import CodingProjects from "./projects.json";

function App() {
  console.log(process.env.PUBLIC_URL);

  // mapping through json file for projects
  const projectItem = CodingProjects.map((proj) => proj);

  return (
    <Router>
      <Navigation />
      <Switch>
        {
          // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        }
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/projects"
          exact
          component={() => <Projects projFunc={projectItem} />}
        />
        <Route path="/contact" exact component={Contact} />
        <Route path={() => "/main" || "/anything"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Notes during coding

// ideas:

// do not forget:
// when send props write route differently

// issues encountered:
// <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> this URL did not work, although it should work for both deployed and developer version as Hadi said!?
// destructing projects with space in the key does not work > temp solution: make it one word
