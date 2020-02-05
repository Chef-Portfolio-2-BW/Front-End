import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import PrivateRoute from "./components/privateRoute.js";

import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';

import Test from './components/test.js';
import RecipeListMain from './components/recipeListMain.js';
import FormikLoginForm from './components/LoginForm.js';

import decode from 'jwt-decode';
// const token = req.headers.authorization
// const username = jwt.decode(token, secret.jwtSecret)['username']


const App = props => {

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


    <Route exact path='/' component={HomePage} />
    <Route exact path='/' component={RecipeListMain} />

    <Route exact path='/signup' render={props=>
      <NewAccount {...props} />} />

    <Route exact path='/login' render={props=>
      <FormikLoginForm {...props} /> }
    />

    <PrivateRoute path='/profile' component={Test} />


  </div>;

}


export default App;
