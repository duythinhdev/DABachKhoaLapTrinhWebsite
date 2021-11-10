import { takeEvery, all, takeLatest } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontypes';
import {loginApp} from "./login";
import {postProduct} from "./main";
import { postUser } from "../saga/userAdmin";
import {postOption, putOption} from "../saga/optionAdmin";
import {getOption} from "../action/optionAdmin";
import {postReview} from "../saga/ReviewAdmin";
import {postComment } from "../saga/CommentAdmin";
import {deleteCategoryProduct, postCategoryProduct, putCategoryProduct} from "../saga/CategoryAdmin";

export function* watchLoginAdmin() {
    yield all([
        takeEvery(actionTypes.LOGIN_APP_ADMIN,loginApp)
    ])
}

export function* watchProductAdmin() {
    yield all([
        takeEvery(actionTypes.POST_DATA_PRODUCT_ADMIN,postProduct)
    ])
}
export function* watchUserAdmin(){
    yield all([
        takeEvery(actionTypes.POST_DATA_USER_ADMIN,postUser)
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
