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
    let urlLogin = 'v1/user/loginadmin';
    try {
        const response:any =  yield axios.post(enviroment.locals + urlLogin, body);
        yield localStorage.setItem("token",JSON.stringify(response.data.response.data.token));
        // yield put(Actions.loginAppSuccess(true))
    }
    catch (e) {
        yield alert('Username, password are wrong');
        yield put(Actions.loginAppSuccess(false))
        yield localStorage.clear();
    }
}
