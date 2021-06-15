import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing all components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router>
      <Navigation />

      <Switch>
        {
          // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        }
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path={() => "/main" || "/anything"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
