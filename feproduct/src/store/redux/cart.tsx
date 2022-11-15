import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";
import { tsInitialState,actionTypeCart,Product } from "../../types/productType"


const initialState: tsInitialState = {
    status: '',
    cart: [],
    quantityItems: 0,
    totalMoney: 0
}
const addItemsCartUser = (action: actionTypeCart, state: tsInitialState) => {
    state.quantityItems = 1;
    action.data.quantityItems =  state.quantityItems;
    action.data.totalAmount = action.data.options[0].price;
    var totalMoneys = 0;
    var idConditionCart;
    let isItemExist = false;
    for(let i = 0 ; i < state.cart.length;i++){
        idConditionCart = state.cart[i]._id;
        if(idConditionCart === action.data._id){
            isItemExist = true;
            state.cart[i].quantityItems++;
            state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityItems;
            totalMoneys += state.cart[i].totalAmount;
        }
    }
    if (!isItemExist) {
        state.cart.push({ ...action.data});
    }
    return updateObject(state, { cart: [...state.cart],totalMoney: totalMoneys})
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
                state.cart[i].quantityItems++;
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityItems;
                if(state.cart[i].quantityItems === 0){
                    state.cart[i].quantityItems++;
                }
                state.cart[i].totalAmount = state.cart[i].options[0].price * state.cart[i].quantityItems;
            }
            else {
                state.cart[i].quantityItems--;
                state.cart[i].totalAmount =  state.cart[i].options[0].price * state.cart[i].quantityItems;
                if(state.cart[i].quantityItems === 0){
                    state.cart[i].quantityItems++;
                }
                state.cart[i].totalAmount =  state.cart[i].options[0].price * state.cart[i].quantityItems;
            }
        }
        totalMoneys += state.cart[i].totalAmount;
        newsData.push(state.cart[i]);
    }
    return updateObject(state, { cart: newsData,totalMoney:  totalMoneys})
}
const cartReducer = (state = initialState, action: actionTypeCart) => {
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
                if(state.cart[i]?.options){
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
export default cartReducer;
