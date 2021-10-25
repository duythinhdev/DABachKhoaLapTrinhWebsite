import { takeEvery, all, takeLatest } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp} from "./login";
export function* watchLogin() {
    yield all([
        takeEvery(actionTypes.LOGIN_APP_ADMIN,loginApp)
    ])
}

