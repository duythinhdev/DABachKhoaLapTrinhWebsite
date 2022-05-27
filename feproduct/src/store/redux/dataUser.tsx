import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";
import { tsInitialState,actionTypeCart,Product } from "../../types/productType"


const initialState: tsInitialState = {
    status: '',
    cart: [],
    quantityCart: 0,
    totalMoney: 0
}
const addItemsCartUser = (action: actionTypeCart, state: tsInitialState) => {
    state.quantityCart = 1;
    action.data.quantityCart =  state.quantityCart;
    action.data.totalAmount = action.data.options[0].price;
    let checkIdExists = [] as Array<Product>;
    var totalMoneys = 0;
    var idConditionCart;
    let alreadyExists = false;
    if(state.cart.length > 0){
        for(let i = 0 ; i < state.cart.length;i++){
            idConditionCart = state.cart[i]._id;
            if(idConditionCart === action.data._id){
                alreadyExists = true;
                state.cart[i].quantityCart++;
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
                totalMoneys += state.cart[i].totalAmount;
            }
            checkIdExists.push(state.cart[i]);
        }
    }
    if (!alreadyExists) {
        state.cart.push({ ...action.data});
    }
    return updateObject(state, { cart: idConditionCart === action.data._id ?  [...checkIdExists ] : [...state.cart]
        ,totalMoney: totalMoneys
    })
}
const removeAllCartUser = (action: actionTypeCart, state: tsInitialState) => {
    return updateObject(state, { cart: [] ,totalMoney: 0 })
}
const removeItemsDetailCartUser = (action: actionTypeCart, state: tsInitialState) => {
    let newsData = [] as Array<Product>;
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
const increaseMinusCartUser =  (action: actionTypeCart, state: tsInitialState) => {
    let newsData = [] as Array<Product>;
    let totalMoneys = 0;
    for(let i = 0 ;i < state.cart.length ; i++)
    {
        if(i === action.id){
            if( action.calculation === "plus"){
                state.cart[i].quantityCart++;
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
                if(state.cart[i].quantityCart === 0){
                    state.cart[i].quantityCart++;
                }
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
            } else {
                state.cart[i].quantityCart--;
                state.cart[i].totalAmount =  state.cart[i].options[0].price * state.cart[i].quantityCart;
                if(state.cart[i].quantityCart === 0){
                    state.cart[i].quantityCart++;
                }
                state.cart[i].totalAmount =  state.cart[i].options[0].price * state.cart[i].quantityCart;
            }
        }
        totalMoneys += state.cart[i].totalAmount;
        newsData.push(state.cart[i]);
    }
    console.log("newsData",newsData)
    return updateObject(state, { cart: newsData,totalMoney:  totalMoneys})
}
const dataUserReducer = (state = initialState, action: actionTypeCart) => {
    switch (action.type) {
        case actionTypes.ADD_CART_USER:
            return addItemsCartUser(action,state);
        case actionTypes.REMOVE_CART_USER:
            return removeAllCartUser(action,state);
        case actionTypes.REMOVE_DETAIL_CART_USER:
            return removeItemsDetailCartUser(action,state);
        case actionTypes.INCREASE_DETAIL_CART_USER:
            return increaseMinusCartUser(action,state);
        case actionTypes.LOAD_TOTAL_CART:
            let totalMoneys = 0;
            for(let i = 0 ; i < state.cart.length;i++){
                if(state.cart[i]?.options)
                {
                    totalMoneys +=  state.cart[i]?.totalAmount
                }
            }
            return {
                 ...state,totalMoney: totalMoneys,
            };
        default:
            return state;
    }
}
export default dataUserReducer;
