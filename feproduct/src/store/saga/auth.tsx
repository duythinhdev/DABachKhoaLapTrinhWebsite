// @ts-ignore
import {put, call,StrictEffect, all,fork, takeLatest } from "redux-saga/effects";
import { configResponses } from "../../store/share/Request";
import { AuthHttp } from "../service/AuthHttp";
import * as actions from "../action/auth";
// @ts-ignore
import {enviroment} from "../../enviroment/enviroment";
import {actionRegister} from "../../types/loginSagaType";
import { LocalStorageService } from "../share/localStorage.service";

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
    try {
        const response = yield call(services.login,body);
        const result: any = yield configResponses(response);
        const localService = new LocalStorageService();
        yield localService.setItem({key: '_token',value: result?.token});
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
    try {
        const response = yield call(services.register,body);
        const result = yield configResponses(response);
        yield put(actions.registerSuccess(result));
    }
    catch (error: any) {
        yield put(actions.registerFailed(error));
    }
}
function* detailUser(): any {
    try {
        const response = yield call(services.detail);
        const result = yield configResponses(response);
        yield put(actions.getDetailUserSuccess(result));
    }
    catch (error: any) {
        yield put(actions.getDetailUserFailed(error));
    }
}
function* logout() {
    yield call([localStorage, 'removeItem'], '_token');
    yield put(actions.logoutUserSuccess())
}
export function* watchLogins(): Generator<StrictEffect>{
    yield takeLatest(actions.LOGIN,login)
}
export function* watchRegister(): Generator<StrictEffect>{
    yield takeLatest(actions.REGISTER,register)
}
export function* watchDetail(): Generator<StrictEffect>{
    yield takeLatest(actions.DETAIL_USER,detailUser)
}
export function* watchLogout(): Generator<StrictEffect>{
    yield takeLatest(actions.LOGOUT,logout)
}
export function* rootAuthSaga() {
    yield all([
        fork(watchLogins),
        fork(watchRegister),
        fork(watchDetail),
        fork(watchLogout),
    ]);
}