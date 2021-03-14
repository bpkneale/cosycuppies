import './index.css';
import "./App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import Banner from './layout/banner';
import { Toast } from './layout/toast';
import { NotFound } from './pages/notfound';
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import LuxonUtils from '@date-io/luxon';
import { Analytics } from './components/analytics';
import ScrollToTop from './scrollToTop';

const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Cakes = lazy(() => import('./pages/cakes'));
const Cupcakes = lazy(() => import('./pages/cupcakes'));
const Cupcake = lazy(() => import("./pages/cupcake"));
const AndMore = lazy(() => import('./pages/andmore'));
const Cart = lazy(() => import('./pages/cart'));

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
              <Suspense fallback={<div></div>}>
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
              </Suspense>
            </ScrollToTop>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}
