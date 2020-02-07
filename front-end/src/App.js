
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from "./components/privateRoute.js";

import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';

import Test from './components/test.js';
import RecipeListMain from './components/recipeListMain.js';

import FormikLoginForm from './components/LoginForm.js';

import RecipeDetail from './components/RecipeDetail.js';

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

      <Head />
      <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Login' component={LoginForm} />
          <Route exact path="/signup" component={NewAccount} />
          <Route exact path='/profile' render={ () => ( <Profile {...props} currentUser={currentUser} /> )} />>
        </Switch>
      <Footer />


  </div>;

}


export default App;
