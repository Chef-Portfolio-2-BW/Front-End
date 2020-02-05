import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';

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
        <div>
            <img src={item.img} alt="{item.img}" />
            <h1>{item.name}</h1>
            <p>By: {item.username}</p>
            <p>Category: {item.category}</p>
            <p>Ingredients: {item.ingredients}</p>
            <p>Instructions: {item.instructions}</p>
        </div>
    );
}

    

export default RecipeDetail;