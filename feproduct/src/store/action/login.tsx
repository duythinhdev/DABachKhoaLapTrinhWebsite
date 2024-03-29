import * as action from '../action/actiontypes';
import * as actionTypes from "./actiontypes";
import {typelogin, typeSignup } from "../../types/TypeActionLogin";

export const loginAppAdmin = (username:string,password:string) => {
    return {
        type: actionTypes.LOGIN_APP_ADMIN,
        username: username,
        password: password
    }
}
export const loginAppUser = ({email,password}: typelogin) => {
    return {
        type: actionTypes.LOGIN_APP_USER,
        email: email,
        password: password
    }
}
export const signup = ({fullName,email,password,phone,address,city,gender}: typeSignup) => {
    return {
        type: actionTypes.SIGNUPS_APP_USER,
        email: email,
        fullName: fullName,
        password: password,
        phone: phone,
        city: city,
        gender: gender,
        address: address
    }
}
export const statusSignup = (title: string,status: boolean) => {
    return {
        type: actionTypes.STATUS_POST_SIGNUPS,
        title: title,
        status: status
    }
}
export const authSuccess = (token: any,isLogin:boolean) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        isLogin: isLogin
    }
}
export const authUser = (currentUser: Object,isLoginUser: boolean,titleLogin: string) => {
    return {
        type: actionTypes.AUTH_SUCCESS_USER,
        currentUser: currentUser,
        isLoginUser: isLoginUser,
    }
}
export const isTokenauth = (istoken:boolean) => {
    return {
        type: actionTypes.IS_AUTH_SUCCESS,
        isToken: istoken,
    }
}
export const logoutSucceed= () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export  const logout = () => {
    return {
        type:actionTypes.AUTH_INITITATE_LOGOUT
    }
}
export  const logoutUser = () => {
    return {
        type:actionTypes.AUTH_INITITATE_LOGOUT_USER
    }
}
export  const logoutStatusUser = (isLoadToast: Boolean, titleLogout: string) => {
    console.log("actions", isLoadToast,titleLogout);
    return {
        type:actionTypes.STATUS_LOGOUT_USER,
        isLoadToast: isLoadToast,
        titleLogout: titleLogout
    }
}

export const checkAuthTimeOut = (expirationTime:any) => {
    return {
        type:action.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
}
export const setAuthRedirectPath = (path:string) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
  }
export const forgotPassword = (email:string) => {
    return {
        type: actionTypes.FORGOT_USER,
        email: email,
    }
}
export const forgotPasswordStatus = (status:Boolean,title:string) => {
    return {
        type: actionTypes.FORGOT_USER_STATUS,
        status: status,
        title: title
    }
}
export const changePasswordUser = (passwordOld:string,passwordNew:string) => {
    return {
        type: actionTypes.CHANGE_PASSWORD_USER,
        passwordOld: passwordOld,
        passwordNew: passwordNew
    }
}
export const changePasswordStatus = (isChangePassword: Boolean,nameChangePassword: string) => {
    return {
        type: actionTypes.STATUS_PASSWORD_CHANGE_USER,
        isChangePassword: isChangePassword,
        nameChangePassword: nameChangePassword
    }
}
