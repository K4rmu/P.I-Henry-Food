import { GET_ALL_RECIPES, GET_RECIPES_BY_NAME } from "../actions";

const initialState = {
    recipes: []
}


const rootReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
              }
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: action.payload
            }
        default: 
            return state
    }
}

export default rootReducer;