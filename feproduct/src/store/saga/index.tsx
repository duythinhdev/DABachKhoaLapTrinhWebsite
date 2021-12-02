import { takeEvery, all, takeLatest } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp, loginUser, signupUser, logoutSaga, logoutUserSaga} from "./login";
import {postProduct,getDetailProduct,putProduct} from "./main";
import { postUser,putUser,deleteUser } from "../saga/userAdmin";
import {postOption, putOption} from "../saga/optionAdmin";
import {getOption} from "../action/optionAdmin";
import {postReview,deleteReview,putReview} from "../saga/ReviewAdmin";
import {postComment } from "../saga/CommentAdmin";
import {deleteCategoryProduct, postCategoryProduct, putCategoryProduct} from "../saga/CategoryAdmin";
import { postNews,putNews,deleteNews } from "../saga/NewsAdmin";
export function* watchLoginAdmin() {
    yield all([
        takeEvery(actionTypes.LOGIN_APP_ADMIN,loginApp),
        takeEvery(actionTypes.LOGIN_APP_USER,loginUser),
        takeEvery(actionTypes.SIGNUP_APP_USER,signupUser),
        takeEvery(actionTypes.AUTH_INITITATE_LOGOUT,logoutSaga),
        takeEvery(actionTypes.AUTH_INITITATE_LOGOUT_USER,logoutUserSaga),
    ])
}

export function* watchProductAdmin() {
    yield all([
        takeEvery(actionTypes.PUT_DATA_PRODUCT_ADMIN,putProduct),
        takeEvery(actionTypes.POST_DATA_PRODUCT_ADMIN,postProduct),
        takeEvery(actionTypes.GET_DETAIL_PRODUCT,getDetailProduct),
    ])
}
export function* watchOptionAdmin(){
    yield all([
        takeEvery(actionTypes.POST_DATA_OPTION_ADMIN,postOption),
        takeEvery(actionTypes.PUT_DATA_OPTION_ADMIN,putOption),
    ])
}
export function* watchReviewAdmin(){
    yield all([
        takeEvery(actionTypes.POST_DATA_REVIEW_ADMIN,postReview),
        takeEvery(actionTypes.DELETE_DATA_REVIEW_ADMIN,deleteReview),
        takeEvery(actionTypes.PUT_DATA_REVIEW_ADMIN,putReview),
    ])
}
export function* watchCommentAdmin(){
    yield all([
        takeEvery(actionTypes.POST_DATA_COMMENT_ADMIN,postComment),
    ])
}

export function* watchCategoryAdmin(){
    yield all([
        takeEvery(actionTypes.POST_CATEGORY_PRODUCT_ADMIN,postCategoryProduct),
        takeEvery(actionTypes.PUT_CATEGORY_PRODUCT_ADMIN,putCategoryProduct),
        takeEvery(actionTypes.DELETE_CATEGORY_PRODUCT_ADMIN,deleteCategoryProduct),
    ])
}
export function* watchUserAdmin(){
    yield all([
        takeEvery(actionTypes.POST_USER_ADMIN,postUser),
        takeEvery(actionTypes.PUT_USER_ADMIN,putUser),
        takeEvery(actionTypes.DELETE_USER_ADMIN,deleteUser),
    ])
}
export function* watchNewsAdmin() {
    yield all([
        takeEvery(actionTypes.POST_DATA_NEWS_ADMIN,postNews),
        takeEvery(actionTypes.PUT_DATA_NEWS_ADMIN,putNews),
        takeEvery(actionTypes.DELETE_DATA_NEWS_ADMIN,deleteNews),
    ])
}
