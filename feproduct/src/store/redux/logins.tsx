import React from 'react';
import {updateObject} from "../share/utility";
import * as  ActionLogin from "../action/logins";
type actionLogins = {
    type: string;
    userName: string
}
type tsInitialState =  {
    userName: string,
    password: string,
    loading: boolean,
    error: string
}
const initialState = {
    userName: "",
    password: "",
    loading: false,
    error: ""
}
const setUserName = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{userName: action.userName})
}
const LoginsReducer = (state = initialState,action: actionLogins) => {
    switch (action.type)
    {
        case ActionLogin.USERNAME_LOGIN:
            return setUserName(state,action);
        default :
            return state;
    }
}

export default LoginsReducer;
