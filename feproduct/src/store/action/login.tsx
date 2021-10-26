import * as action from '../action/actiontypes';


export const loginAppAdmin = (username:string,password:string) => {
    return {
        type: action.LOGIN_APP_ADMIN,
        username: username,
        password: password
    }
}

export const loginAppSuccess = (isLogin: boolean) => {
    console.log("isLoginAction",isLogin)
    return {
        type: action.IS_LOGIN_APP_ADMIN,
        isLogin: isLogin,
    }
}
