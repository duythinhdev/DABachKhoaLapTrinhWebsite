import { takeEvery, all, takeLatest } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp} from "./login";
import {postProduct} from "./main";
export function* watchLogin() {
    yield all([
        takeEvery(actionTypes.LOGIN_APP_ADMIN,loginApp)
    ])
}

export function* watchProduct() {
    yield all([
        takeEvery(actionTypes.POST_DATA_PRODUCT_ADMIN,postProduct)
    ])
}
