import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Github from "./Components/Github";

ReactDOM.render(
  <Router>
    <Route exact path="/homepage" component={App} />
    <Route exact path="/github" component={Github} />
  </Router>,
  document.getElementById("root")
);
