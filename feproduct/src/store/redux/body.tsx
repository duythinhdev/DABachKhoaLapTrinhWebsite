import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    isNavAdminUser: boolean,
    isNavAdminProduct: boolean,
    isNavAdminReview: boolean,
    isNavAdminOption: boolean,
    isMenu:boolean
    isLoginAdmin: boolean,
    titleProductPost: string,
    status:boolean
}

const initialState: tsInitialState = {
    isNavAdminUser: false,
    isNavAdminProduct: false,
    isNavAdminReview: false,
    isNavAdminOption: false,
    isMenu:false,
    isLoginAdmin: false,
    titleProductPost: "",
    status: false

}
const setIsNavAdminUser  = (action:any,state:any) => {
    return updateObject(state,{isNavAdminUser: action.isNavAdminUser})
}
const setIsNavAdminProduct  = (action:any,state:any) => {
    return updateObject(state,{isNavAdminProduct: action.isNavAdminProduct})
}
const setIsMenuLeft = (action:any,state:any) => {
    return updateObject(state,{isMenu: action.menuLeft})
}
const setIsNavAdminReview = (action:any,state:any) => {
    return updateObject(state,{isNavAdminReview: action.isNavAdminReview})
}
const setIsNavAdminOption = (action:any,state:any) => {
    return updateObject(state,{isNavAdminOption: action.isNavAdminOption})
}
const titleProductPost = (action:any,state:any) => {
    console.log("status",action.status,"title",action.title)
    return updateObject(state,{ titleProductPost: action.title , status: action.status} )
}
const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.IS_NAV_ADMIN_BODY_USER:
            return setIsNavAdminUser(action,state);
        case actionTypes.IS_NAV_ADMIN_BODY_PRODUCT:
            return setIsNavAdminProduct(action,state);
        case actionTypes.IS_NAV_ADMIN_BODY_REVIEW:
            return setIsNavAdminReview(action,state);
        case actionTypes.IS_NAV_ADMIN_BODY_OPTION:
            return setIsNavAdminOption(action,state);
        case actionTypes.STATUS_SUCCESS_POST_PRODUCT:
            return titleProductPost(action,state);
        case actionTypes.IS_NAV_MENU_LEFT:
            return setIsMenuLeft(action,state);
        default :
            return state;
    }
}

export default mainReducer;
