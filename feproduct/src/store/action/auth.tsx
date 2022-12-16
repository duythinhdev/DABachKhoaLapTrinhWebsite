import {typeRegister} from "../../types/loginSagaType";
const LOGIN: any = "LOGIN";
const LOGIN_SUCCESS: any = "LOGIN_SUCCESS";
const LOGIN_FAIL: any = "LOGIN_FAIL";

const REGISTER: any = "REGISTER";
const REGISTER_SUCCESS: any = "REGISTER_SUCCESS";
const REGISTER_FAIL: any = "REGISTER_FAIL";

const DETAIL_USER: any = "DETAIL_USER";
const DETAIL_USER_SUCCESS: any = "DETAIL_USER_SUCCESS";
const DETAIL_USER_FAIL: any = "DETAIL_USER_FAIL";

const LOGOUT = "LOGOUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DETAIL_USER,
    DETAIL_USER_SUCCESS,
    DETAIL_USER_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS
};
const logoutUser = () => {
    return {
        type: LOGOUT,
    }
}
const logoutUserSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    }
}
const login = (userName: string, password: string) => {
    return {
        type: LOGIN,
        userName: userName,
        password: password
    }
}
const loginSuccess = (token:any) => {   
    return {
        type: LOGIN_SUCCESS,
        token: token,
    }
}
const loginFailed = (error:any) => {
    return {
        type: LOGIN_FAIL,
        error: error,
    }
}

const register = (data : typeRegister) => {
    return {
        type: REGISTER,
        data: data
    }
}
const registerSuccess = (result: any) => {
    return {
        type: REGISTER_SUCCESS,
        result: result
    }
}
const registerFailed = (error: any) => {
    return {
        type: REGISTER_FAIL,
        error: error,
    }
}
const getDetailUser = () =>{
    return {
        type: DETAIL_USER,
    }
}
const getDetailUserSuccess = (result: any) => {
    return {
        type: DETAIL_USER_SUCCESS,
        result: result
    }
}
const getDetailUserFailed = (error: any) => {
    return {
        type: DETAIL_USER_FAIL,
        error: error,
    }
}

export {
    login,
    loginSuccess,
    loginFailed,
    register,
    registerSuccess,
    registerFailed,
    getDetailUser,
    getDetailUserSuccess,
    getDetailUserFailed,
    logoutUser,
    logoutUserSuccess
}