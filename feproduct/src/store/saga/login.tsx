import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as actions from "../action/index";
import jwt from "jwt-decode";

export function* loginApp(actions: any) {
    const { username, password } = actions;
    let body = {
        email: username,
        password: password
    }
    let urlLogin = 'v1/user/login';
    yield axios.post(enviroment.local + urlLogin, body).then((res: any) => {
        console.log("res",res)
        localStorage.setItem("token",JSON.stringify(res.data.response.data.token))
        put(actions);
        alert('success')
    }).catch(err => {
        console.log('err',err)
        alert('Username, password are wrong')
    });
}
