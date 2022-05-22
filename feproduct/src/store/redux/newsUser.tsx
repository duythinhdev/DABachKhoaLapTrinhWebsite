import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

export interface tsInitialState {
    listNews:  Array<any>,
}

const initialState: tsInitialState = {
    listNews: [],
}
interface news {
    data: Array<any>,
}
const dataNews = (state:tsInitialState,action:news) => {
    // console.log("actionnews",action.data);
    return updateObject(state,{listNews: action.data})
}
const newsReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.DATA_NEWS_USER:
            return dataNews(state,action);
        default: // need this for default case
            return state 
    }
}

export default newsReducer;
