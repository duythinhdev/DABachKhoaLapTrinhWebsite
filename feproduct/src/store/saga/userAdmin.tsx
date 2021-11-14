import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postUser(actions: any) {
    const { permission,full_name,address,name,phone,username,password,created_at,updated_at } = actions;
    let body = {
        permission: permission,
        full_name: full_name,
        address: address,
        name: name,
        phone: phone,
        username: username,
        password: password,
        created_at: created_at,
        updated_at: updated_at
    }
    let urlLogin = 'v1/user/post';
    try {
        const response:Promise<any> =  yield axios.post(enviroment.locals + urlLogin, body);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
export function* putUser(actions: any) {
    const { id,permission,full_name,address,name,phone,username,password,created_at,updated_at } = actions;
    let urlLogin = `v1/user/delete${id}`;
    let body = {
        permission: permission,
        full_name: full_name,
        address: address,
        name: name,
        phone: phone,
        username: username,
        password: password,
        created_at: created_at,
        updated_at: updated_at
    }
    try {
        const response:Promise<any> =  yield axios.put(enviroment.locals + urlLogin, body);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
export function* deleteUser(actions: any) {
    let id = actions.id;
    let urlLogin = `v1/user/delete${id}`;
    try {
        const response:Promise<any> =  yield axios.delete(enviroment.locals + urlLogin);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}

