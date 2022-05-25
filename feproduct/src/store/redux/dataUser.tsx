import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";
import cssVars from '@mui/system/cssVars';

interface tsInitialState {
    status: string,
    cart: Array<any>,
    quantityCart: number,
    totalMoney: number
}

const initialState: tsInitialState = {
    status: '',
    cart: [],
    quantityCart: 0,
    totalMoney: 0
}
interface actionCart {
    data: any,
    id: any,
    calculation:string
}
const addItemsCartUser = (action: actionCart, state: tsInitialState) => {
    state.quantityCart = 1;
    action.data.quantityCart =  state.quantityCart;
    action.data.totalAmount = action.data.options[0].price;
    let arrayCheckId = [] as Array<any>;
    var totalMoneys = 0;
    var idCart;
    let alreadyExists = false;
    if(state.cart.length > 0){
        for(let i = 0 ; i < state.cart.length;i++){
            idCart = state.cart[i]._id;
            if(idCart === action.data._id){
                alreadyExists = true;
                state.cart[i].quantityCart++;
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityCart;
                totalMoneys += state.cart[i].totalAmount;
            }
            arrayCheckId.push(state.cart[i]);
        }
    }
    if (!alreadyExists) {
        state.cart.push({ ...action.data});
    }
    console.log("ArrayCheckId",arrayCheckId);
    return updateObject(state, { cart: idCart === action.data._id ?  [...arrayCheckId ] : [...state.cart]
        ,totalMoney: totalMoneys
    })
}
const removeAllCartUser = (action: actionCart, state: tsInitialState) => {
    return updateObject(state, { cart: [] ,totalMoney: 0 })
}
const removeItemsDetailCartUser = (action: actionCart, state: tsInitialState) => {
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
const increaseMinusCartUser =  (action: actionCart, state: tsInitialState) => {
    let newsData = [] as Array<any>;
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
const dataUserReducer = (state = initialState, action: any) => {
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
