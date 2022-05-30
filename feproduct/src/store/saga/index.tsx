import { takeEvery, all, takeLatest,StrictEffect } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp, loginUser, signUpUser, logoutSaga, logoutUserSaga} from "./login";
import {postProduct,getDetailProduct,putProduct} from "./main";
import { postUser,putUser,deleteUser } from "../saga/userAdmin";
import {postOption, putOption} from "../saga/optionAdmin";
import {getOption} from "../action/optionAdmin";
import {postReview,deleteReview,putReview} from "../saga/ReviewAdmin";
import {postComment } from "../saga/CommentAdmin";
import {deleteCategoryProduct, postCategoryProduct, putCategoryProduct} from "../saga/CategoryAdmin";
import { postNews,putNews,deleteNews } from "../saga/NewsAdmin";
import { postOrder } from "../saga/order";
import { getNewsUser } from "../saga/newsUser";

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
    ])
}

export function* watchProductAdmin(): Generator<StrictEffect> {
    yield all([
        takeEvery(actionTypes.PUT_DATA_PRODUCT_ADMIN,putProduct),
        takeEvery(actionTypes.POST_DATA_PRODUCT_ADMIN,postProduct),
        takeEvery(actionTypes.GET_DETAIL_PRODUCT,getDetailProduct),
    ])
}
export function* watchOptionAdmin(): Generator<StrictEffect>{
    yield all([
        takeEvery(actionTypes.POST_DATA_OPTION_ADMIN,postOption),
        takeEvery(actionTypes.PUT_DATA_OPTION_ADMIN,putOption),
    ])
}
