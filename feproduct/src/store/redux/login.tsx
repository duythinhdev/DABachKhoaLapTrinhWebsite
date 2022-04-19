import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

export interface tsInitialState {
    isLoginAdmin: boolean,
    titleSignup: string,
    StatusSignup: boolean,
    token: any,
    authRedirectPath: string,
    tokenUser: any,
    isLoginUser: boolean,
}

const initialState: tsInitialState = {
    isLoginAdmin: false,
    titleSignup: '',
    StatusSignup: false,
    token: null,
    authRedirectPath: '/admin',
    tokenUser: null,
    isLoginUser: false,
}
const setIsLoginAdmin = (state:any,action:any) => {
    return updateObject(state,{})
}
const setStatusSignUp = (state:any,action:any) => {
    let  { title,status} = action
    return updateObject(state,{ titleSignup: title,StatusSignup: status})
}
const authLogout = (state:any, action:any) => {
    return updateObject(state, { token: null })
}
const authSuccess = (state:any, action:any) => {
    console.log("action.token",action)
    return updateObject( state, {token: action.token , isLoginAdmin: action.isLogin })
}
const authSuccessUser = (state:any, action:any) => {
    return updateObject( state, {tokenUser: action.tokenUser , isLoginUser: action.isLoginUser })
}
const isAuth = (state:any, action:any) => {
    return updateObject( state, { isLoginAdmin: action.isToken })
}
const setAuthRedirectPath  = (action:any, state:any) => {
    return updateObject(state , {authRedirectPath: action.path})
}
const LoginReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.IS_LOGIN_APP_ADMIN:
            return setIsLoginAdmin(action,state);
        case actionTypes.STATUS_POST_SIGNUPS:
            return setStatusSignUp(action,state);
        case actionTypes.AUTH_LOGOUT:
            return  authLogout(state,action);
        case actionTypes.AUTH_SUCCESS:
            return  authSuccess(state,action);
        case actionTypes.AUTH_SUCCESS_USER:
            return  authSuccessUser(state,action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
        return setAuthRedirectPath(state,action)
        case actionTypes.IS_AUTH_SUCCESS:
            return isAuth(state,action)
        default :
            return state;
    }
}

export default LoginReducer;
