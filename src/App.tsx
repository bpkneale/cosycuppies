import './index.css';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Banner from './layout/banner';
import Contact from './pages/contact';
import Cakes from './pages/cakes';
import Cupcakes from './pages/cupcakes';
import AndMore from './pages/andmore';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Banner />
        <div className="content bg">
          <Switch>
            <Route path="/cupcakes">
              <Cupcakes />
            </Route>
            <Route path="/cakes">
              <Cakes />
            </Route>
            <Route path="/and-more">
              <AndMore />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
