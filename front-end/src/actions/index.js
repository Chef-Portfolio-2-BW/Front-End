import { axiosWithAuth } from '../components/axiosAuth.js';
import axios from 'axios';

export const getRecipes = () => {

  return (dispatch) => {
    dispatch({type: 'FETCH_RECIPE_START'});
    axios
    .get('https://bwchefhub/herokuapp.com/api/recipes')
    .then(res => {
      dispatch({type: 'FETCH_RECIPE_SUCCESS', payload: res.data})
    })
    .catch(err => dispatch({type: 'FETCH_RECIPE_FAIL', payload: err}))
  }
}


export const selectRecipe= (choice) =>{

  return (dispatch) =>{
    dispatch({type: 'SELECT_RECIPE_START', payload: choice})
    axios
      .get(`${choice.url}`)
      .then(res => {
        dispatch({type: 'SELECT_RECIPE_SUCCESS', payload:res.data});
      })
      .catch(err => dispatch({type:"SELECT_RECIPE_FAIL", payload: err}))
  }
}
