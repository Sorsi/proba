import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
