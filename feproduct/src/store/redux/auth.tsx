import {updateObject} from "../share/utility";
import * as  ActionLogin from "../action/auth";

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
    return updateObject(state,{loading: false,error: action?.error})
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
    switch (action.type)
    {
        case ActionLogin.LOGIN:
            return login(state,action);
        case ActionLogin.LOGIN_SUCCESS:
            return loginSuccess(state,action);
        case ActionLogin.LOGIN_FAIL:
            return loginFailed(state,action);
        case ActionLogin.REGISTER:
            return register(state,action);
        case ActionLogin.REGISTER_SUCCESS:
            return registerSuccess(state,action);
        case ActionLogin.REGISTER_FAIL:
            return registerFailed(state,action);
        default :
            return state;
    }
}

export default LoginsReducer;
