import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';
import {Container, Row, Col, CardDeck} from 'reactstrap';
import RecipeCardMain from './recipeCardMain.js';

const RecipeListMain = (props) =>{
  const [recipeList, setRecipeList] = useState([]);
  // console.log("recipe props: ", props)
  useEffect(() =>{
    axiosWithAuth()
      .get('https://bwchefhub.herokuapp.com/api/recipes')
      .then(res => {
        // console.log('recipes data: ', res)
        setRecipeList(res.data);
      })
      .catch(err => console.log('Error: ', err))
    }, []);

    return(
      <div className="recipe-list-container">
        <Container className="recipe-list-main">
          <Row>
            <Col><h2>Current Hot Recipes</h2></Col>
          </Row>
          <CardDeck className='fix'>
            {recipeList.map(recipe =>(

                <RecipeCardMain {...props} key={recipe.id} id={recipe.id} name={recipe.name} img={recipe.img} username={recipe.username} />

            ))}
          </CardDeck>
        </Container>
      </div>
    )



}

export default RecipeListMain;
