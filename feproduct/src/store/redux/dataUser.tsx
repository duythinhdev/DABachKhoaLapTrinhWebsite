import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    status: string,
    cart: Array<any>,
    quantityCart: number
}

const initialState: tsInitialState = {
    status: '',
    cart: [],
    quantityCart: 1
}
interface actionCart {
    data: any,
    id: any
}
const cartUser = (action: actionCart, state: tsInitialState) => {
    action.data.quantityCart = 1;
    return updateObject(state, { cart: [...state.cart, action.data]})
}
const removeCartuser = (action: actionCart, state: tsInitialState) => {
    return updateObject(state, { cart: []})
}
const removeIndexCartuser = (action: actionCart, state: tsInitialState) => {
    let newsData = [] as Array<any>;
    console.log("index",action.id);
    for(let i = 0 ;i < state.cart.length ; i++)
    {
        console.log("i",i)
        if(i !== action.id){
            newsData.push(state.cart[i]);
        }
    }
    console.log("oldData",newsData);
    return updateObject(state,{ cart: newsData})
}
const increaseProductCart = (action: actionCart, state: tsInitialState) => {
    let newsData = [] as Array<any>;
    console.log("action.id",action.id);
    for(let i = 0 ;i < state.cart.length ; i++)
    {
        console.log("state.cart[i]",state.cart[i]);
        if(i === action.id){
            state.cart[i].quantityCart += 1;
            console.log("state.cart[i].quantityCart", state.cart[i].quantityCart);
            state.cart[i].options[0].price = state.cart[i].options[0].price *  state.cart[i].quantityCart;
            console.log("state.cart[i].quantityCart", state.cart[i].options[0].price);
        }
        newsData.push(state.cart[i]);
    }
    console.log("newsData",newsData)
    return updateObject(state, { cart: newsData})
}
const dataUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CART_USER:
            return cartUser(action,state);
        case actionTypes.REMOVE_CART_USER:
            return removeCartuser(action,state);
        case actionTypes.REMOVE_DETAIL_CART_USER:
            return removeIndexCartuser(action,state);
        case actionTypes.INCREASE_DETAIL_CART_USER:
            return increaseProductCart(action,state);
        default:
            return state;
    }
}
export default dataUserReducer;
