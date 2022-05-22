import React from 'react';
import {updateObject} from "../share/utility";
import * as actionTypes from "../action/actiontypes";

interface tsInitialState {
    darkMode: boolean,
}

const initialState: tsInitialState = {
    darkMode: false

}
interface propscolor {
    discolor: boolean
}
const discoloration = (action: propscolor, state: tsInitialState) => {
    return updateObject(state);
} 
const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
