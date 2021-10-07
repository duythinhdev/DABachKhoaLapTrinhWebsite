import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    isNavAdminUser: boolean,
    isNavAdminProduct: boolean,
}

const initialState: tsInitialState = {
    isNavAdminUser: false,
    isNavAdminProduct: false,
}
const setIsNavAdminUser  = (action:any,state:any) => {
    return updateObject(state,{isNavAdminUser: action.isNavAdminUser})
}
const setIsNavAdminProduct  = (action:any,state:any) => {
    return updateObject(state,{isNavAdminProduct: action.isNavAdminProduct})
}
const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.IS_NAV_ADMIN_BODY_USER:
            return setIsNavAdminUser(action,state);
        case actionTypes.IS_NAV_ADMIN_BODY_PRODUCT:
            return setIsNavAdminProduct(action,state);
        default :
            return state;
    }
}

export default mainReducer;
