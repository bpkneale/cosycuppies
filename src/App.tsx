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
import { Cupcake } from "./pages/cupcake";
import AndMore from './pages/andmore';
import { NotFound } from './pages/notfound';
import { Cart } from './pages/cart';
import { Toast } from './layout/toast';
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import LuxonUtils from '@date-io/luxon';
import { Analytics } from './components/analytics';
import ScrollToTop from './scrollToTop';

export default function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div className="app bg" id="app">
          <Analytics />
          <Banner />
          <Toast />
          <div className="content">
            <ScrollToTop>
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
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/not-found">
                  <NotFound />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </ScrollToTop>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}
