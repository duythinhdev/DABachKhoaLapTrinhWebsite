import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

export interface tsInitialState {
    listNews:  Array<tscategoryNews>,
}

const initialState: tsInitialState = {
    listNews: [],
}
export type  images = {
    _id: string,
    public_id: string,
    url:string
}
export type News = {
    _id: string,
    title: string,
    is_show: Boolean,
    content: string,
    category_News: string,
    createdAt: string,
    images: Array<images>
}
export type tscategoryNews = {
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    news: Array<News>
    type: string
}
type tsAction = {
    data: Array<tscategoryNews>,
    type: string
}
const dataNews = (state:tsInitialState,action:tsAction) => {
    // console.log("actionnews",action.data);
    return updateObject(state,{listNews: action.data})
}
const newsReducer = (state = initialState,action:tsAction) => {
    switch (action.type)
    {
        case actionTypes.DATA_NEWS_USER:
            return dataNews(state,action);
        default: // need this for default case
            return state 
    }
}

export default newsReducer;
