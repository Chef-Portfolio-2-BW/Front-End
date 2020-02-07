import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/privateRoute.js";


import NewAccount from './components/newAccount.js';
import './App.css';
import HomePage from './components/homePage.js';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import UpdateRecipe from './components/updateRecipe.js';



import RecipeCardPro from './components/recipeCardPro.js';

import RecipeDetail from "./components/RecipeDetail.js";

import decode from "jwt-decode";

import Post from "./components/post.js";
import Test from './components/test.js';

const App = props => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    loggedIn: false,
    id: ""
  });

  const [selection, setSelection] = useState({name:'', id:''});


  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      let tempToken = localStorage.getItem("token");
      const decoded = decode(tempToken);
      // console.log("decoded:", decoded);
      // console.log("tempToken", tempToken);
      setCurrentUser({
        name: decoded.username,
        loggedIn: true,
        id: decoded.subject
      });
    }
  }, []);

  console.log("currentUser: ", currentUser);

  console.log("selection:", selection);

  return(
    <div className="App">
      <div className='page-container'>
        <div className="content-wrap">

          <Head />
          <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Switch>
            <Route exact path='/' render={props=>(
                <HomePage {...props} setSelection={setSelection} />
              )}
            />
            <Route exact path='/Login' render={props =>(
               <LoginForm {...props} setCurrentUser={setCurrentUser} />
              )}
            />
            <Route exact path="/signup" render={props =>(
               <NewAccount {...props} />
              )}
            />
            <Route exact path="/recipes/:id" render={props =>(
               <RecipeDetail {...props} selection={selection} />
              )}
            />
            <PrivateRoute exact path="/profile" component={Test} setSelection={setSelection} currentUser={currentUser} />
            <PrivateRoute exact path="/create" component={Post} />
            <PrivateRoute excat path="/edit/:id" component={UpdateRecipe} name={selection.name} id={selection.id} />
          </Switch>
          <Route exact path='/test' render={props =>(
             <RecipeCardPro {...props} />
            )}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>

    </div>
  </div>
);


}



export default App;
