import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    isNavAdminUser: boolean,
}

const initialState: tsInitialState = {
    isNavAdminUser: false,

}
const setIsNavAdminUser = (action: any, state: any) => {
    return updateObject(state, {isNavAdminUser: action.isNavAdminUser})
}
const userAdminReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.IS_NAV_ADMIN_BODY_USER:
            return setIsNavAdminUser(action, state);
        default :
            return state;
    }
}

export default userAdminReducer;
