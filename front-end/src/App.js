import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from "./components/privateRoute.js";

import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

import LoginForm from './components/LoginForm';





const App = props => {
  return <div className="App">
      <Head />
      <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Login' component={LoginForm} />
          <Route exact path="/signup" component={NewAccount} />
        </Switch>
      <Footer />
  </div>;

}


export default App;
