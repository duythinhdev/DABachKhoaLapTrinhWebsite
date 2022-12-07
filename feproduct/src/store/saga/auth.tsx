// @ts-ignore
import {put, call,StrictEffect, all,takeEvery, takeLatest } from "redux-saga/effects";
import { configResponses } from "../../store/share/Request";
import { AuthHttp } from "../service/AuthHttp";
import * as actions from "../action/auth";
// @ts-ignore
import {enviroment} from "../../enviroment/enviroment";
import {actionRegister} from "../../types/loginSagaType";

const LINK_API: string = enviroment.localNode;
const services: any = new AuthHttp(LINK_API);
type login = {
    userName: string,
    password: string
}
function* login(action: login): any {
    const body = {
        email: action.userName,
        password: action.password
    }
    const response = yield call(services.login,body);
    const result = yield configResponses(response);
    try {
        yield put(actions.loginSuccess(result?.token));
    }
    catch (error: any) {
        yield put(actions.loginFailed(error));
    }
}


function* register(action: actionRegister): any {
    const body = {
        userName: action?.data.username,
        full_name: action?.data.full_name,
        permission: action?.data.permission,
        is_active: action?.data.is_active,
        address: action?.data.address,
        gender: action?.data.gender == '0' ? 0 : 1,
        phone_number: action?.data.phone_number,
        city: action?.data.provinces,
        ward: action?.data.ward,
        district: action?.data.district,
        birthDay: action?.data.birthDay,
        password: action?.data.password
    }
    const response = yield call(services.register,body);
    const result = yield configResponses(response);
    try {
        yield put(actions.registerSuccess(result));
    }
    catch (error: any) {
        yield put(actions.registerFailed(error));
    }
}
export function* watchLogins(): Generator<StrictEffect>{
    yield all([
        takeLatest(actions.LOGIN,login),
        takeLatest(actions.REGISTER,register),
    ])
}