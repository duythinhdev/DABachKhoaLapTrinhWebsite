import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    isNavAdminUser: boolean,
    isNavAdminProduct: boolean,
    isNavAdminReview: boolean,
    isNavAdminOption: boolean,
    isNavAdminOptionOrder: false,
    isNavAdminOder: boolean,
    isNavAdminNews: boolean,
    isNavAdminComments: boolean,
    isNavAdminCategoryProduct: false,
    isMenu: boolean
    isLoginAdmin: boolean,
    titleProductPost: string,
    status: boolean,
    darkMode: boolean,
}

const initialState: tsInitialState = {
    isNavAdminUser: false,
    isNavAdminProduct: false,
    isNavAdminReview: false,
    isNavAdminOption: false,
    isNavAdminOptionOrder: false,
    isNavAdminOder: false,
    isNavAdminNews: false,
    isNavAdminComments: false,
    isNavAdminCategoryProduct: false,
    isMenu: false,
    isLoginAdmin: false,
    titleProductPost: "",
    status: false,
    darkMode: false

}
const setIsNavAdminUser = (action: any, state: any) => {
    return updateObject(state, {isNavAdminUser: action.isNavAdminUser})
}
const setIsNavAdminProduct = (action: any, state: any) => {
    return updateObject(state, {isNavAdminProduct: action.isNavAdminProduct})
}
const setIsMenuLeft = (action: any, state: any) => {
    return updateObject(state, {isMenu: action.menuLeft})
}
const setIsNavAdminReview = (action: any, state: any) => {
    return updateObject(state, {isNavAdminReview: action.isNavAdminReview})
}
const setIsNavAdminOption = (action: any, state: any) => {
    return updateObject(state, {isNavAdminOption: action.isNavAdminOption})
}
const setIsNavAdminOptionOrder = (action: any, state: any) => {
    return updateObject(state, {isNavAdminOptionOrder: action.isNavAdminOptionOrder})
}
const setIsNavAdminOrder = (action: any, state: any) => {
    return updateObject(state, {isNavAdminOder: action.isNavAdminOrder})
}
const setIsNavAdminNews = (action: any, state: any) => {
    return updateObject(state, {isNavAdminNews: action.isNavAdminNews})
}
const setIsNavAdminCategoryProduct = (action: any, state: any) => {
    return updateObject(state, {isNavAdminCategoryProduct: action.isNavAdminCategoryProduct})
}
const setIsNavAdminCategoryComment = (action: any, state: any) => {
    return updateObject(state, {isNavAdminComments : action.isNavAdminComments})
}
const titleProductPost = (action: any, state: any) => {
    return updateObject(state, {titleProductPost: action.title, status: action.status})
}
const discoloration = (action:any, state: any) => {
    return updateObject(state,{discolor: state.discolor });
} 
const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.IS_NAV_ADMIN_BODY_USER:
            return setIsNavAdminUser(action, state);
        case actionTypes.IS_NAV_ADMIN_BODY_PRODUCT:
            return setIsNavAdminProduct(action, state);
        case actionTypes.IS_NAV_ADMIN_BODY_REVIEW:
            return setIsNavAdminReview(action, state);
        case actionTypes.IS_NAV_ADMIN_BODY_OPTION:
            return setIsNavAdminOption(action, state);
        case actionTypes.IS_NAV_ADMIN_BODY_ORDER:
            return setIsNavAdminOrder(action, state);
        case actionTypes.IS_NAV_ADMIN_OPTION_ORDER:
            return setIsNavAdminOptionOrder(action, state);
        case actionTypes.IS_NAV_ADMIN_NEWS:
            return setIsNavAdminNews(action, state);
        case actionTypes.IS_NAV_ADMIN_CATEGORY_PRODUCT:
            return setIsNavAdminCategoryProduct(action, state);
        case actionTypes.IS_NAV_ADMIN_COMMENTS:
            return setIsNavAdminCategoryComment(action, state);
        case actionTypes.STATUS_SUCCESS_POST_PRODUCT:
            return titleProductPost(action, state);
        case actionTypes.IS_NAV_MENU_LEFT:
            return setIsMenuLeft(action, state);
        case actionTypes.STATUS_DISCOLORATION:
            if(action.discolor === 'LIGHT')
            {
                state.darkMode = false;
            }
            else if(action.discolor === 'DARK' ) {
                state.darkMode = true;
            }
            else if(action.discolor === 'TOGGLE' ) {
                state.darkMode =  !state.darkMode ;
            }
            return discoloration(action, state)
        default :
            return state;
    }
}

export default mainReducer;
