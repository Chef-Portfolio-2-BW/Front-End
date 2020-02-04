import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeDetail() {

    const [item, setItem] = useState({});

    useEffect( () => {
        axios
        .get('https://bwchefhub.herokuapp.com/api/recipes/get?ids=${match.params.id}')
        .then(res => setItem(res.data))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <div>
            <img src={item.img} alt="{item.img}" />
            <h1>{item.name}</h1>
            <p>By: {item.username}</p>
            <p>{item.type}</p>
        </div>
    );
}

    

export default RecipeDetail;