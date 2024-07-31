import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                language="en"
                pageSize={12}
                category="general"
                key="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                language="en"
                pageSize={12}
                category="business"
                key="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                language="en"
                pageSize={12}
                category="entertainment"
                key="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                language="en"
                pageSize={12}
                category="health"
                key="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                language="en"
                pageSize={12}
                category="science"
                key="science"
              />
            </Route>
            <Route exact path="/sport">
              <News language="en" pageSize={12} category="sport" key="sport" />
            </Route>
            <Route exact path="/technology">
              <News
                language="en"
                pageSize={12}
                category="technology"
                key="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
