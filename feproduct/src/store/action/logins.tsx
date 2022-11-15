const LOGIN: any = "LOGIN";
const LOGIN_SUCCESS: any = "LOGIN_SUCCESS";
const LOGIN_FAIL: any = "LOGIN_FAIL";

export {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
};
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
    login,
    loginSuccess,
    loginFailed
}