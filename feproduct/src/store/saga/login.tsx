import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* loginApp(actions: any) : any {
    const { username, password } = actions;
    let body = {
        email: username,
        password: password
    }
    let urlLogin = 'v1/user/login';
    try {
        const response:any =  yield axios.post(enviroment.local + urlLogin, body);
        yield localStorage.setItem("token",JSON.stringify(response.data.response.data.token));
        yield localStorage.setItem("exp",JSON.stringify(response.data.response.data.exp));
        yield put(Actions.loginAppSuccess(true))
    }
    catch (e) {
        yield alert('Username, password are wrong');
        yield localStorage.clear();
    }
}
