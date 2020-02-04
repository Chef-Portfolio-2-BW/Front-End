import React, { useState } from "react";
import { Route } from 'react-router-dom';
import PrivateRoute from "./components/privateRoute.js";

import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';


import RecipeListMain from './components/recipeListMain.js';




const App = props => {
  return <div className="App">
  

    <Route exact path='/' component={HomePage} />
    <Route exact path='/' component={RecipeListMain} />
    <Route exact path="/signup" component={NewAccount} />


  </div>;

}


export default App;
