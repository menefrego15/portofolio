import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Project from "./Pages/Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
