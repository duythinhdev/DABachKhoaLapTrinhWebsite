import React from 'react';
import {updateObject} from "../share/utility";
import * as  ActionLogin from "../action/logins";
type actionLogins = {
    type: string;
    userName: string;
    token: string;
    error: string;
}
type tsInitialState =  {
    userName: string;
    password: string;
    loading: boolean;
    error: string;
    token: string;
}
const initialState = {
    userName: "",
    password: "",
    loading: false,
    error: "",
    token: ""
}
const login = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: true})
}
const loginSuccess = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false,token: action?.token })
}
const loginFailed = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{error: action?.error})
}
const LoginsReducer = (state = initialState,action: actionLogins) => {
    switch (action.type)
    {
        case ActionLogin.LOGIN:
            return login(state,action);
        case ActionLogin.LOGIN_SUCCESS:
            return login(state,action);
        case ActionLogin.LOGIN_FAIL:
            return login(state,action);
        default :
            return state;
    }
}

export default LoginsReducer;
