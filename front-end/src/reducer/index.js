export const initialState = {
  recipes:[{
    id: 1,
    userID: 1,
    name: "lasagna",
    mealID: 3,
    img:''
  }],
  isFetching:false,
  error: '',
  curSel: {info: {
    id: 1,
    userID: 1,
    name: "lasagna",
    mealID: 3,
    img:''
  }}
};

export const chefHubReducer = (state, action) =>{
  switch(action.type) {
    case 'FETCH_RECIPE_START':
      return {...state, isFetching: true, error: ''};
    case 'FETCH_RECIPE_SUCCESS':
      return {...state, recipes: action.payload, isFetching:false, error:''}
    case 'FETCH_RECIPE_FAIL':
      return {...state, error: action.payload}
    case 'SELECT_RECIPE_START':
      let selection = state.recipes.filter((recipe)=>{
        return recipe.id === state.recipes.id;
      })
      return {...state, curSel: selection, isFetching:true, error:''}
    case 'SELECT_RECIPE_SUCCESS':
      return {...state, curSel:{...state.curSel, info:action.payload}, isFetching: false, error:''}
    case 'SELECT_RECIPE_FAIL':
      return {...state, error: action.payload, isFetching: false}
    default:
      return state;
  }

};
