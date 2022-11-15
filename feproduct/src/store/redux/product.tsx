import React from 'react';
import {updateObject} from "../share/utility";
import * as actionProduct from "../action/product";

interface tsInitialState {
    loading?: boolean;
    errors?: string;
    list?: any;
    option?: Object;
}
interface action {
    list: Object,
    option: Object
}

const initialState: tsInitialState = {
    loading: false,
    errors: "",
    list: [],

}
const product = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: true })
}
const productSuccess = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: false, list: action?.list })
}
const productFailed = (action: any, state: any) => {
    return updateObject(state, { loading: false, list: [] })
}
const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionProduct.GET_PRODUCT:
            return product(action, state);
        case actionProduct.GET_PRODUCT_SUCCESS:
            return productSuccess(action, state);
        case actionProduct.GET_PRODUCT_FAIL:
            return productFailed(action, state);
        default :
            return state;
    }
}

export default productReducer;
