import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";
import { tsInitialState,tsActionNews } from "../../types/newsType"



const initialState: tsInitialState = {
    listNews: [],
}
const dataNews = (state:tsInitialState, action:tsActionNews) => {
    // console.log("actionnews",action.data);
    return updateObject(state,{listNews: action.data})
}
const newsReducer = (state = initialState,action:tsActionNews) => {
    switch (action.type)
    {
        case actionTypes.DATA_NEWS_USER:
            return dataNews(state,action);
        default: // need this for default case
            return state 
    }
}

export default newsReducer;
