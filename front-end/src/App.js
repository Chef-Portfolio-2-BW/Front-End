<<<<<<< HEAD
import React, { useState } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute.js";

import NewAccount from "./components/newAccount.js";
import "./App.css";
import HomePage from "./components/homePage.js";
=======

import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from "./components/privateRoute.js";

import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

import LoginForm from './components/LoginForm';

import Test from './components/test.js';
import RecipeListMain from './components/recipeListMain.js';

import FormikLoginForm from './components/LoginForm.js';

import RecipeDetail from './components/RecipeDetail.js';

import decode from 'jwt-decode';
// const token = req.headers.authorization
// const username = jwt.decode(token, secret.jwtSecret)['username']
>>>>>>> 3282ad106bae9836c8e823064fe9c1dc8b2e0e6a

import RecipeListMain from "./components/recipeListMain.js";
import Post from "./components/Post";

const App = props => {
<<<<<<< HEAD
  return (
    <div className="App">
      {/* <Route exact path='/' component={HomePage} />
    <Route exact path='/' component={RecipeListMain} />
    <Route exact path="/signup" component={NewAccount} /> */}
      <Post />
    </div>
  );
};
=======

  const [currentUser, setCurrentUser] = useState({
    name: '',
    loggedIn: false,
    id: ''
  });

  useEffect(()=>{
    if (localStorage.getItem('token') !== null){
      let tempToken = localStorage.getItem('token');
      const decoded = decode(tempToken);
      // console.log("decoded:", decoded);
      // console.log("tempToken", tempToken);
      setCurrentUser({name: decoded.username , loggedIn:true, id:decoded.subject});
    }

  }, [])

  console.log("currentUser: ", currentUser);


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

>>>>>>> 3282ad106bae9836c8e823064fe9c1dc8b2e0e6a

export default App;
