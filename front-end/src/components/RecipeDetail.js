import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';

import styled from "styled-components";



const DetailDiv = styled.div`
    margin-top: 0.5%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 50px;
    padding: 0.75%;
    width: 90%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #fd9827;
`





const RecipeDetail = (props) => {

    const [item, setItem] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState({});

    const [isLoading, setIsLoading] = useState(true);


    const goBack = () =>{
      props.history.goBack();
    }
    useEffect( () => {
      axiosWithAuth()
        .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}`)
        .then(res => {
          setItem({img:res.data.img});
          console.log('recipe data:', res.data);
          axiosWithAuth()
            .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}/instructions`)
            .then(res=>{
              console.log("instructions:", res.data);
              setInstructions(res.data);
              axiosWithAuth()
                .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}/ingredients`)
                .then(res=>{
                  console.log("ingredients:", res.data);
                  setIngredients(res.data);
                  setIsLoading(false);

                })
                .catch(err=>console.log("ingredients detail error:", err))
              })
            .catch(err=>console.log("instructions detail error:", err))

          })
        .catch(err => console.log(err))
    }, []);


    if( isLoading === false){

      return (
          <DetailDiv>
              <img src={item.img} alt={item.img} />
              <h1>{item.name}</h1>
              <p>By: {props.selection.name}</p>
              <p>Category: {item.category}</p>

              <p>Ingredients:
              <ul>{ingredients.map(ingredient=>{
                    return <li>{ingredient.item}</li>
              })}
              </ul>
              </p>
              <p>Instructions: {instructions.step}</p>
              <br />
              <br />
              <button className="add-button" onClick={goBack}>Go Back</button>
          </DetailDiv>
        );
      } else {
        return <div>Loading...</div>
      }

}



export default RecipeDetail;
