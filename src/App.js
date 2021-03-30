<<<<<<< HEAD
import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import MoviePage from "./pages/MoviePagePage";
import SignUpPage from "./pages/SignUpPage";
import SelectRegion from "./components/SelectRegion";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/api/signin" component={SignInPage} exact />
          <Route path="/aboutus" component={AboutUs} exact />
          <Route path="/moviepage/:movieID" component={MoviePage} exact />
          <Route path="/api/signup" component={SignUpPage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
=======

import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import SignInPage from "./pages/SignInPage";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";


function App() {
  return (
    <Router>
      <div className="app">
     
        <NavBar />
        
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path = "/signin" component = {SignInPage} exact />
          <Route path = "/aboutus" component = {AboutUs} exact />
          <Route path = "/signup" component = {SignUpPage} exact />
      
       </Switch>
    </div>
    </Router>
   
    
  );
}

export default App;
>>>>>>> Updated files
