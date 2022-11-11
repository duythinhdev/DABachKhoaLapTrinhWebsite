const USERNAME_LOGIN: any = "USERNAME_LOGIN";
const LOGIN: any = "LOGIN";
const LOGIN_SUCCESS: any = "LOGIN_SUCCESS";
const LOGIN_FAIL: any = "LOGIN_FAIL";

export {
    USERNAME_LOGIN,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
};
const changeUserNameLogin = (userName: string) => {
    return {
        type: USERNAME_LOGIN,
        userName: userName
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
export {
    changeUserNameLogin,
    login,
    loginSuccess,
    loginFailed
}