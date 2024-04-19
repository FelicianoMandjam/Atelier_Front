import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Articles , {initialArticleType} from "../../interfaces/articles";
import User from "../../interfaces/User";

const initialState : initialArticleType = {
    data : [],
    loading: null , 
    error :  false,
};


export const Articles = createSlice({
    name: "articles" , 
    initialState,
    reducers: {
        FETCH_START:(draft:initialArticleType) =>{
            draft.loading = true
        },
        FETCH_SUCCES:(draft:initialArticleType , actions) =>{
            draft.loading = false ;
            draft.data = actions.payload; 
        },
        FETCH_FAILURE: (draft: initialArticleType) => {
            draft.loading = false;
            draft.error = true;
          },
         
    }
});

export const {FETCH_START , FETCH_SUCCES , FETCH_FAILURE } = Articles.actions;

export default Articles.reducer;
