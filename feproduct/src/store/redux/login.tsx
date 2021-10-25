import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    isLoginAdmin: boolean,
}

const initialState: tsInitialState = {
    isLoginAdmin: false,

}
const setIsLoginAdmin = (action:any,state:any) => {
    return updateObject(state,{isLoginAdmin: action.isLogin})
}
const LoginReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.IS_LOGIN_APP_ADMIN:
            return setIsLoginAdmin(action,state);
        default :
            return state;
    }
}

export default LoginReducer;
