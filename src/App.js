import React from "react";
import { Browserrouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Navigation />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route
          path={process.env.PUBLIC_URL + "/About"}
          exact
          component={About}
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
