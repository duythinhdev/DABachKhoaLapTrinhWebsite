import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";
import { ActionLogin,tsInitialState} from "../../types/loginReduxType"


const initialState: tsInitialState = {
    isLoginUser: false,
    statusForgot:  false,
    currentUser: {},
    titleforgot: "",
    titleLogin: "",
    isLoadToast: false,
    titleLogout: "",
    isChangePassword: false,
    nameChangePassword: ""
}
const setIsLoginAdmin = (state: tsInitialState,action:any) => {
    return updateObject(state,{})
}
const setStatusSignUp = (state: tsInitialState,action:any) => {
    let  { title,status} = action
    return updateObject(state,{ titleSignup: title,StatusSignup: status})
}
const authLogout = (state: tsInitialState, action:any) => {
    return updateObject(state, { token: null })
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
const statusLogout = (state: tsInitialState, action: ActionLogin) => {
    let {titleLogout,isLoadToast} = action;
    return updateObject( state, {isLoadToast: isLoadToast, titleLogout: titleLogout })
}
const statusChangePassword = (state: tsInitialState, action: ActionLogin) => {
    let { isChangePassword, nameChangePassword } = action;
    return updateObject( state, {isLoadToast: isChangePassword, nameChangePassword: nameChangePassword })
}
const LoginReducer = (state = initialState,action:ActionLogin) => {
    switch (action.type)
    {
        case actionTypes.IS_LOGIN_APP_ADMIN:
            return setIsLoginAdmin(state,action,);
        case actionTypes.STATUS_POST_SIGNUPS:
            return setStatusSignUp(state,state);
        case actionTypes.AUTH_LOGOUT:
            return  authLogout(state,action);
        case actionTypes.AUTH_SUCCESS_USER:
            return  authSuccessUser(state,action);
        case actionTypes.FORGOT_USER_STATUS:
            return  statusForgot(state,action);
        case actionTypes.STATUS_LOGOUT_USER:
            return  statusLogout(state,action);
        case actionTypes.STATUS_PASSWORD_CHANGE_USER:
            return  statusChangePassword(state,action);
        default :
            return state;
    }
}

export default LoginReducer;
