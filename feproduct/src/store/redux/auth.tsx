import {updateObject} from "../share/utility";
import * as  ActionAuth from "../action/auth";

type actionLogins = {
    type: string;
    userName: string;
    error: string;
    token: string;
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
    token: "",
}
const login = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: true})
}
const loginSuccess = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false,token: action?.token })
}
const loginFailed = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false, error: action?.error, token: ""})
}
const logoutSuccess = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false,token: ""})
}
const register = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: true})
}
const registerSuccess = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false})
}
const registerFailed = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false,error: action?.error})
}
const LoginsReducer = (state = initialState,action: actionLogins) => {
    switch (action.type){
        case ActionAuth.LOGIN:
            return login(state,action);
        case ActionAuth.LOGIN_SUCCESS:
            return loginSuccess(state,action);
        case ActionAuth.LOGIN_FAIL:
            return loginFailed(state,action);
        case ActionAuth.REGISTER:
            return register(state,action);
        case ActionAuth.REGISTER_SUCCESS:
            return registerSuccess(state,action);
        case ActionAuth.REGISTER_FAIL:
            return registerFailed(state,action);
        case ActionAuth.LOGOUT_SUCCESS:
            return logoutSuccess(state,action);
        default :
            return state;
    }
}

export default LoginsReducer;
