import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    dataDetailProduct: any,
    status: string
    flag:  boolean,
}

const initialState: tsInitialState = {
    dataDetailProduct: null,
    status: '',
    flag:  false,

}
const getDetailProduct = (action: any, state: any) => {
    // console.log("action.res",action.res)
    return updateObject(state, {dataDetailProduct: action.res.data})
}
const dataUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_GET_DETAIL_PRODUCT:
            return getDetailProduct(action, state);
        default :
            return state;
    }
}
export default dataUserReducer;
