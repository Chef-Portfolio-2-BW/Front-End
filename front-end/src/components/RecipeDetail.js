import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';
import styled from "styled-components";



const DetailDiv = styled.div`
    margin-top: 0.5%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 0.5%;
    padding: 0.5%;
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

    useEffect( () => {
        axiosWithAuth()
        .get(`https://bwchefhub.herokuapp.com/api/recipes/${props.match.params.id}`)
        .then(res => {setItem(res.data) 
            console.log(res)})
        .catch(err => console.log(err))
    }, [props.match.params.id]);
    
    return (
        <DetailDiv>
            <img src={item.img} alt="{item.img}" />
            <h1>{item.name}</h1>
            <p>By: {item.username}</p>
            <p>Category: {item.category}</p>
            <p>Ingredients: {item.ingredients}</p>
            <p>Instructions: {item.instructions}</p>
        </DetailDiv>
    );
}

    

export default RecipeDetail;