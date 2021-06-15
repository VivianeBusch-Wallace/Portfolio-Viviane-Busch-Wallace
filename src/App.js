import React from "react";
import { Browserrouter as Router, Switch, Route } from "react-router-dom";

// importing all components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router className="App">
      <Navigation />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route
          path={process.env.PUBLIC_URL + "/about"}
          exact
          component={About}
        />
        <Route
          path={process.env.PUBLIC_URL + "/projects"}
          exact
          component={Projects}
        />
        <Route
          path={process.env.PUBLIC_URL + "/contact"}
          exact
          component={Contact}
        />
        <Route path={() => "/main" || "/anything"}>
          <Home />
        </Route>
      </Switch>
      {/* <header className="header"></header> */}
    </Router>
  );
}

export default App;
