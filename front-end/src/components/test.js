import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './axiosAuth.js';
import {Container, Row, Col, CardDeck, Button} from 'reactstrap';

import RecipeCardPro from './recipeCardPro.js';

const Test = (props) =>{
  const [recipeList, setRecipeList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
      .get('https://bwchefhub.herokuapp.com/api/recipes/myrecipes')
      .then(res => {
        console.log('recipes data: ', res)
        setRecipeList(res.data);
      })
      .catch(err => console.log('Error: ', err))
    }, [])




    return(
      <div>
        <Container className="recipe-list-main main account">
          <Row>
            <Col><Button onClick={()=>props.history.push('/create')}>Add a new Recipe</Button></Col>
          </Row>
          <Row>
            <Col><h2>Your Recipes</h2></Col>
          </Row>

          <CardDeck className='fix'>
            {recipeList.map(recipe =>(

                <RecipeCardPro {...props} key={recipe.id} id={recipe.id} mealId={recipe.mealID} name={recipe.name} img={recipe.img} username={recipe.username}
                setRecipeList={setRecipeList} setSelection={props.setSelection} currentUser={props.currentUser}/>

            ))}
          </CardDeck>
        </Container>
      </div>
    )


}

export default Test;
