import React, { useState } from "react";
import { axiosWithAuth } from './axiosAuth.js';
import {Container, Row, Col, CardDeck} from 'reactstrap';

import RecipeCardPro from './recipeCardPro.js';

const Test = (props) =>{
  const [recipeList, setRecipeList] = useState([]);

  const getRecipes = () =>{
    axiosWithAuth()
      .get('https://bwchefhub.herokuapp.com/api/recipes/myrecipes')
      .then(res => {
        console.log('recipes data: ', res)
        setRecipeList(res.data);
      })
      .catch(err => console.log('Error: ', err))

  }



    return(
      <div>
        <Container className="recipe-list-main main account">
          <Row>
            <Col><h2>Your Recipes</h2></Col>
          </Row>
          <section>
            <button onClick={()=> getRecipes()}> Get Recipes </button>
          </section>
          <CardDeck className='fix'>
            {recipeList.map(recipe =>(

                <RecipeCardPro {...props} key={recipe.id} id={recipe.id} name={recipe.name} img={recipe.img} username={recipe.username} />

            ))}
          </CardDeck>
        </Container>
      </div>
    )


}

export default Test;
