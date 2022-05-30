import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";
export function* postOrder(actions: any) {
    let id = actions.id;
    let urlLogin = `v1/user/delete/${id}`;
    try {
        const response:Promise<any> =  yield axios.delete(enviroment.local + urlLogin);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
