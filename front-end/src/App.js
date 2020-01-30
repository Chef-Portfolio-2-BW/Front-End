import React, { useState } from "react";

import PrivateRoute from "./components/privateRoute.js";

import CreatePost from "./components/post";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <CreatePost />
    </div>
  );
};

export default App;
