import { ADD_ARTICLE } from "../constants/action-types";
import {restCallArticles} from "../../modules/RestCaller";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_ARTICLE:{
            return { ...state, articles: state.articles.concat(action.payload) };
        }
        default:
            return state;
    }
    console.log(state.articles[0]);
};

export default rootReducer;