import React, { useState } from 'react';

import PrivateRoute from './components/privateRoute.js';


import NewAccount from './components/newAccount.js';

import './App.css';

const App = (props) => {
  return (
    <div className="App">



      <NewAccount />
    </div>
  );
}

export default App;
