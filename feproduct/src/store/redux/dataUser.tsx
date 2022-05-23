import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    status: string,
    cart: Array<any>,
    quantityCart: number,
    totalMoney: number
}

const initialState: tsInitialState = {
    status: '',
    cart: [],
    quantityCart: 1,
    totalMoney: 0
}
interface actionCart {
    data: any,
    id: any,
    calculation:string
}
const cartUser = (action: actionCart, state: tsInitialState) => {
    action.data.quantityCart = 1;
    action.data.totalAmount = action.data.options[0].price;
    return updateObject(state, { cart: [...state.cart, action.data] })
}
const removeCartuser = (action: actionCart, state: tsInitialState) => {
    return updateObject(state, { cart: []})
}
const removeIndexCartuser = (action: actionCart, state: tsInitialState) => {
    let newsData = [] as Array<any>;
    let totalMoneys = 0;
    for(let i = 0 ;i < state.cart.length ; i++)
    {
        if(i !== action.id){
            newsData.push(state.cart[i]);
            totalMoneys += state.cart[i].totalAmount;
        }
    }
    return updateObject(state, { cart: newsData,totalMoney: totalMoneys})
}
const increaseProductCart =  (action: actionCart, state: tsInitialState) => {
    let newsData = [] as Array<any>;
    let totalMoneys = 0;
    for(let i = 0 ;i < state.cart.length ; i++)
    {
        if( i === action.id){
            if( action.calculation === "plus"){
                state.cart[i].quantityCart += 1;
                let updateTotalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
                state.cart[i].totalAmount = updateTotalAmount;
            } else {
                state.cart[i].quantityCart -= 1;
                let updateTotalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
                state.cart[i].totalAmount = updateTotalAmount;
            }
        }
        totalMoneys += state.cart[i].totalAmount;
        newsData.push(state.cart[i]);
    }
    console.log("newsData",newsData)
    return updateObject(state, { cart: newsData,totalMoney:  totalMoneys})
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
        case actionTypes.LOAD_TOTAL_CART:
            let totalMoneys = 0;
            for(let i = 0 ; i < state.cart.length;i++){
                totalMoneys +=  state.cart[i].options[0].price;
            }
            return {
                 ...state,totalMoney: totalMoneys
            };
        default:
            return state;
    }
}
export default dataUserReducer;
