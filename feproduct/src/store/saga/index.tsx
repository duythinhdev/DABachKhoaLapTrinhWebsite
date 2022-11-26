import { takeEvery, all,StrictEffect } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp, loginUser, signUpUser, logoutSaga,
     logoutUserSaga,forgotPasswordUser,changePasswordUser} from "./login";
import {postProduct,getDetailProduct,putProduct} from "./main";
import { postOrder } from "../saga/order";
import { getNewsUser } from "../saga/newsUser";
import { detailProduct } from "../saga/productdetail";
import { product } from "../saga/product";
import { login, register } from "./auth";
import { getAllProvinces } from "../saga/Provinces";
import  * as Actions from '../action/productdetail';
import  * as ActionsProduct from '../action/product';
import  * as ActionLogin from "../action/auth";
import  * as ActionProvinces from "../action/provinces";

export function* watchOrderUser(): Generator<StrictEffect>{ 
    yield all([
        takeEvery(actionTypes.POST_ORDER_CART,postOrder),
    ])
}
export function* watchNewsUser(): Generator<StrictEffect>{ 
    yield all([
        takeEvery(actionTypes.NEWS_USER,getNewsUser),
    ])
}
export function* watchLoginAdmin(): Generator<StrictEffect> {
    yield all([
        takeEvery(actionTypes.LOGIN_APP_ADMIN,loginApp),
        takeEvery(actionTypes.LOGIN_APP_USER,loginUser),
        takeEvery(actionTypes.SIGNUPS_APP_USER,signUpUser),
        takeEvery(actionTypes.AUTH_INITITATE_LOGOUT,logoutSaga),
        takeEvery(actionTypes.AUTH_INITITATE_LOGOUT_USER,logoutUserSaga),
        takeEvery(actionTypes.FORGOT_USER,forgotPasswordUser),
        takeEvery(actionTypes.CHANGE_PASSWORD_USER,changePasswordUser),
    ])
}

export function* watchProductAdmin(): Generator<StrictEffect> {
    yield all([
        takeEvery(actionTypes.PUT_DATA_PRODUCT_ADMIN,putProduct),
        takeEvery(actionTypes.POST_DATA_PRODUCT_ADMIN,postProduct),
        takeEvery(actionTypes.GET_DETAIL_PRODUCT,getDetailProduct),
    ])
}
export function* watchDetailProduct(): Generator<StrictEffect>{
    yield all([
        takeEvery(Actions.GET_DETAIL_PRODUCT,detailProduct),
    ])
}
export function* watchProduct(): Generator<StrictEffect>{
    yield all([
        takeEvery(ActionsProduct.GET_PRODUCT,product),
    ])
}
export function* watchLogins(): Generator<StrictEffect>{
    yield all([
        takeEvery(ActionLogin.LOGIN,login),
        takeEvery(ActionLogin.REGISTER,register),
    ])
}
export function* watchProvinces(): Generator<StrictEffect>{
    yield all([
        takeEvery(ActionProvinces.GET_ALL_LOCATION,getAllProvinces),
    ])
}




