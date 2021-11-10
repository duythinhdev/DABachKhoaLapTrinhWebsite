import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    dataoption: Array<any>,
    status: string
    flag:  boolean,
}

const initialState: tsInitialState = {
    dataoption: [],
    status: '',
    flag:  false,

}
const statusOption = (action: any, state: any) => {
    return updateObject(state, {status: action.status,flag: action.flags})
}
const optionMainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.DATA_OPTION_ADMIN:
            return statusOption(action, state);
        case actionTypes.DATA_OPTION_ADMIN:
            return statusOption(action, state);
        default :
            return state;
    }
}

export default optionMainReducer;
