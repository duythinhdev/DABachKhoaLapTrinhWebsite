import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

export interface tsInitialState {
    isLoginUser: boolean,
    currentUser: Object;
    statusForgot:  boolean;
    titleforgot: string,
    titleLogin: string
}

const initialState: tsInitialState = {
    isLoginUser: false,
    statusForgot:  false,
    currentUser: {},
    titleforgot: "",
    titleLogin: ""
}
interface authSuccess {
    tokenUser: string,
    isLoginUser: Boolean
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
    return updateObject( state, {token: action.token , isLoginAdmin: action.isLogin })
}
interface ActionLogin{
    currentUser: object,
    isLoginUser: boolean,
    status: boolean,
    type: string,
    title: string,
    titleLogin: string  
}
const authSuccessUser = (state: tsInitialState, action: ActionLogin) => {
    let {isLoginUser, titleLogin, currentUser} = action;
    return updateObject( state, {currentUser: currentUser ,
         isLoginUser: isLoginUser,
         titleLogin:  titleLogin })
}
const statusForgot = (state: tsInitialState, action: ActionLogin) => {
    return updateObject( state, {statusForgot: action.status, titleforgot: action.title })
}
const LoginReducer = (state = initialState,action:ActionLogin) => {
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
        case actionTypes.FORGOT_USER_STATUS:
            return  statusForgot(state,action);
        default :
            return state;
    }
}

export default LoginReducer;
