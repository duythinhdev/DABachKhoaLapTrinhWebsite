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
        default :
            return state;
    }
}

export default userAdminReducer;
