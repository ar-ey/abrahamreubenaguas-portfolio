import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/global.css";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Success from "./components/Success";
import Blog from "./components/Blog";



export default function App() {

  return (
    <Router>
      <>

        <Nav />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/projects"><Projects /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/success"><Success /></Route>
          <Route exact path="/blog"><Blog /></Route>
        </Switch>
      </>
    </Router>
  );
}

