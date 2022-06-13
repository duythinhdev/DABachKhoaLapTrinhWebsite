import {put, call,select} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";
import {createAxios}  from "../../enviroment/axiosApp";
import { login } from "../../types/loginSagaType";
import * as selectors from './selector';
export function* postOrder(actions: any) {
    let login: login = yield select(selectors.getLogin)
    let urlOrder = `v1/order/post`;
    try {
        const response: Promise<any> =  yield axios.post(enviroment.local + urlOrder);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
