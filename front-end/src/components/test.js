import React from "react";
import {axiosWithAuth} from './axiosAuth.js';



const Test = (props) =>{

  const getRecipes = () =>{
    axiosWithAuth()
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
