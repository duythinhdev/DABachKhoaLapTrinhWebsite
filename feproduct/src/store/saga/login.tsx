import {put, call,delay } from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

interface  signUps { 
    type: "SIGNUPS_APP_USER",
    fullName?:string,
    email?:string,
    password?:string,
    phone?:string,
    address?:string,
    city?:string,
    gender?:string
    status: number
}
interface login {
    type: "LOGIN_APP_USER",
    email:string
    password: string,
    status: number,
    data: any,
}
export function* logoutSaga(action:any) {
    yield call([localStorage, 'removeItem'], 'tokenAdmin');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield put(Actions.authSuccess(null,false));
    yield put(Actions.logoutSucceed())
}
export function* loginApp(actions: any) : any {
    const { username, password } = actions;
    let body = {
        email: username,
        password: password
    }
    let urlLogin = 'v1/user/loginadmin';
    try {
        const response:any =  yield axios.post(enviroment.local + urlLogin, body);
        if(response.data.response.status === 200)
        {
            yield put(Actions.authSuccess(response.data.response.data.token,true));
            yield localStorage.setItem("tokenAdmin",JSON.stringify(response.data.response.data.token));
            yield alert("success");
        } else if(response.data.response.status === 108) {
            alert("fail");
            yield put(Actions.authSuccess(null,false));
        }
    }
    catch (e) {
        yield put(Actions.authSuccess("",false));
        yield alert("user errorr");
    }
}

export function* signUpUser(actions: signUps)
{
    const { fullName,email,password,phone,address,city,gender } = actions;
    let body = {
        full_name: fullName,
        email: email,
        address: address,
        password: password,
        phone_number: phone,
        city: city,
        gender: gender
    }
    let urlSignUp = 'user/signups';
    try {
        let  response: signUps  = yield axios.post(enviroment.localNode + urlSignUp, body);
        console.log("status",response);
        switch(response.status)
        {
            case 201: 
                yield put(Actions.statusSignup("Chúc Mừng Bạn Đã Đăng ký thành Viên Thành Công",true))
            break;
            // case 409:
            //     yield put(Actions.statusSignup("Bạn Đã Đăng ký trùng Email",true))
            // break;
        }
      
    }
    catch (e) {
        console.log(e);
        yield put(Actions.statusSignup("Bạn Đã Đăng ký thành Viên Thất Bại "  + e,true))
    }
}
export function* logoutUserSaga() {
    yield call([localStorage, 'removeItem'], 'tokenUser');
    yield put(Actions.authSuccessUser(null,false));
    yield put(Actions.logoutSucceed())
}
export function* loginUser(actions: login) {
    const { email, password } = actions;
    let body = {
        email: email,
        password: password
    }
    let urlLogin = 'user/login';
    try {
        const response: login =  yield  axios.post(enviroment.localNode + urlLogin, body);
        console.log("response",response)
        switch(response.status)
        {
            case 200: 
                yield put(Actions.statusSignup("Đăng Nhập thành Công",true))
                yield localStorage.setItem("tokenUser",JSON.stringify(response.data.token));
                yield put(Actions.authSuccessUser(response.data.token,true));
            break;
            case 108: 
                yield put(Actions.authSuccessUser(null,false));
             break;
        }
    }
    catch (e) {
        yield put(Actions.statusSignup("Đăng Nhập thất bại"  + e,true))
        yield localStorage.clear();
    }
}
