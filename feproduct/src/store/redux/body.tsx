import React from 'react';

interface tsInitialState {
    isTask: boolean
}

const initialState: tsInitialState = {
    isTask: false
}
const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        // case actionTypes.GET_TASK_LIST_APP:
        //     return ListBoard(action,state);
        default :
            return state;
    }
}

export default mainReducer;
