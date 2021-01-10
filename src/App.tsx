import './index.css';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Banner from './layout/banner';
import Contact from './pages/contact';
import Cakes from './pages/cakes';
import Cupcakes from './pages/cupcakes';
import { Cupcake } from "./pages/cupcake";
import AndMore from './pages/andmore';
import { NotFound } from './pages/notfound';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Banner />
        <div className="content bg">
          <Switch>
            <Route path="/cupcakes/:cupcake">
              <Cupcake />
            </Route>
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
            <Route path="/not-found">
              <NotFound />
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
