import './index.css';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Banner from './layout/banner';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Banner />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
