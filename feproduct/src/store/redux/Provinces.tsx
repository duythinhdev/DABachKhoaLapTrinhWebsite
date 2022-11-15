import {updateObject} from "../share/utility";
import * as actions from "../action/provinces";

interface tsInitialState {
    loading?: boolean;
    errors?: string;
    list?: Array<any>;
}
interface action {
    list: Object,
}

const initialState: tsInitialState = {
    loading: false,
    errors: "",
    list: [],

}
const getProvinces = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: true})
}
const getProvincesSuccess = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: false, list: action?.list})
}
const getProvincesFailed = (action: any, state: any) => {
    return updateObject(state, { loading: false, list: [] })
}
const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.GET_ALL_LOCATION:
            return getProvinces(action, state);
        case actions.GET_ALL_LOCATION_SUCCESS:
            return getProvincesSuccess(action, state);
        case actions.GET_ALL_LOCATION_FAIL:
            return getProvincesFailed(action, state);
        default :
            return state;
    }
}

export default locationReducer;
