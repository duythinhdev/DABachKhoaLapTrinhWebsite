import {updateObject} from "../share/utility";
import * as  ActionAuth from "../action/auth";

type actionLogins = {
    result: Object;
    error: string;
    type: string;
}
type tsInitialState =  {
    information: Object;
    error: string;
    loading: boolean;
}
const initialState = {
    information: {},
    loading: false,
    error: ""
}
const detailUser = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: true})
}
const detailUserSuccess = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false,information: action?.result })
}
const detailUserFailed = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false, error: action?.error})
}
const logoutUser = (state: tsInitialState,action: actionLogins) => {
    return updateObject(state,{loading: false, information: {}})
}
const LoginsReducer = (state = initialState,action: actionLogins) => {
    switch (action.type){
        case ActionAuth.DETAIL_USER:
            return detailUser(state,action);
        case ActionAuth.DETAIL_USER_SUCCESS:
            return detailUserSuccess(state,action);
        case ActionAuth.DETAIL_USER_FAIL:
            return detailUserFailed(state,action);
        case ActionAuth.LOGOUT_SUCCESS:
            return logoutUser(state,action);
        default:
            return state;
    }
}

export default LoginsReducer;
