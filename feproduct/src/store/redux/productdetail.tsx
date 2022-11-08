import React from 'react';
import {updateObject} from "../share/utility";
import * as actionProduct from "../action/productdetail";

interface tsInitialState {
    loading: boolean;
    errors: string;
    list: any;
    option: Object;
}

const initialState: tsInitialState = {
    loading: false,
    errors: "",
    list: {},
    option: {}

}
const detailSuccess = (action: any, state: any) => {
    return updateObject(state, { loading: false, list: action?.data,option: action.option })
}
const detailFailed = (action: any, state: any) => {
    return updateObject(state, { loading: false })
}
const productDetailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionProduct.GET_DETAIL_PRODUCT_SUCCESS:
            console.log("action",state);
            return detailSuccess(action, state);
        case actionProduct.GET_DETAIL_PRODUCT_FAIL:
            console.log("action",state);
            return detailFailed(action, state);
        default :
            return state;
    }
}

export default productDetailReducer;
