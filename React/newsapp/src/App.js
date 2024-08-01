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
            <Route exact path="/ar">
              <News language="ar" pageSize={12} category="general" key="ar" />
            </Route>
            <Route exact path="/de">
              <News language="de" pageSize={12} category="general" key="de" />
            </Route>
            <Route exact path="/es">
              <News language="es" pageSize={12} category="general" key="es" />
            </Route>
            <Route exact path="/fr">
              <News language="fr" pageSize={12} category="general" key="fr" />
            </Route>
            <Route exact path="/he">
              <News language="he" pageSize={12} category="general" key="he" />
            </Route>
            <Route exact path="/it">
              <News language="it" pageSize={12} category="general" key="it" />
            </Route>
            <Route exact path="/nl">
              <News language="nl" pageSize={12} category="general" key="nl" />
            </Route>
            <Route exact path="/no">
              <News language="no" pageSize={12} category="general" key="no" />
            </Route>
            <Route exact path="/pt">
              <News language="pt" pageSize={12} category="general" key="pt" />
            </Route>
            <Route exact path="/ru">
              <News language="ru" pageSize={12} category="general" key="ru" />
            </Route>
            <Route exact path="/sv">
              <News language="sv" pageSize={12} category="general" key="sv" />
            </Route>
            <Route exact path="/zh">
              <News language="zh" pageSize={12} category="general" key="zh" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
