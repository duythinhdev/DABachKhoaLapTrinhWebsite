import {put, call,delay} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";


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

export function* signupUser(actions: any) :any
{
    const { name,fullname,username, password,phone } = actions;
    let body = {
        name: name,
        full_name: fullname,
        username: username,
        password: password,
        phone: phone
    }
    console.log(name,fullname,username,password,phone);
    let urlSignup = 'v1/user/signup';
    try {
        const response:any =  yield axios.post(enviroment.local + urlSignup, body);
        yield put(Actions.statusSignup("post success",true))
    }
    catch (e) {
        yield put(Actions.statusSignup("signup failed",true))
    }
}
export function* loginUser(actions:any) : any{
    const { username, password } = actions;
    console.log(username,password)
    let body = {
        email: username,
        password: password
    }
    let urlLogin = 'v1/user/login';
    try {
        const response: any =  yield  axios.post(enviroment.local + urlLogin, body);
        if(response.data.response.status === 200)
        {
            yield localStorage.setItem("tokenUser",JSON.stringify(response.data.response.data.token));
            yield put(Actions.authSuccessUser(response.data.response.data.token,true));
            yield put(Actions.statusSignup("post success",true))
        }
        else if(response.data.response.status === 108) {
            alert("fail");
            yield put(Actions.authSuccess(null,false));
        }
    }
    catch (e) {
        yield alert('Username, password are wrong');
        yield localStorage.clear();
    }
}
