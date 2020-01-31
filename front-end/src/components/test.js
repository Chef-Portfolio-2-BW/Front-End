import React from "react";
import axios from 'axios';
// import {Button} from 'react-strap';


const Test = (props) =>{

  const getRecipes = () =>{
    axios
      .get('https://bwchefhub.herokuapp.com/api/recipes')
      .then(res => {
        console.log('recipes data: ', res)
      })
      .catch(err => console.log('Error: ', err))

  }
  return(
    <div className="main">
      <section>
        <button onClick={()=> getRecipes()}> Get Recipes </button>
      </section>
    </div>

  )


}

export default Test;
