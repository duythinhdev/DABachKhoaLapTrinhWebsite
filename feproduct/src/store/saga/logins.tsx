// @ts-ignore
import {put, call} from "redux-saga/effects";
import { configResponse } from "../../store/share/Request";
import { LoginHttp } from "../service/LoginHttp";
import * as actions from "../action/logins";
// @ts-ignore
import {enviroment} from "../../enviroment/enviroment";

const LINK_API: string = enviroment.localNode;
const services: any = new LoginHttp(LINK_API);
type login = {
    userName: string,
    password: string
}
export function* login(action: login): any {
    const body = {
        userName: action.userName,
        password: action.password
    }
    const response = yield call(services.login,body);
    const result = yield configResponse(response);
    try {
        yield put(actions.loginSuccess(result?.data.token));
    }
    catch (error: any) {
        yield put(actions.loginFailed(error));
    }
}