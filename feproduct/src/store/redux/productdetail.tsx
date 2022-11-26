import {updateObject} from "../share/utility";
import * as actionProduct from "../action/productdetail";

interface tsInitialState {
    loading?: boolean;
    errors?: string;
    list?: any;
    option?: Object;
}
interface action {
    detail: Object,
    option: Object
}

const initialState: tsInitialState = {
    loading: false,
    errors: "",
    list: {},
    option: {}

}
const detail = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: true})
}
const detailSuccess = (action: action, state: tsInitialState) => {
    return updateObject(state, { loading: false, list: action?.detail,option: action.option })
}
const detailFailed = (action: any, state: any) => {
    return updateObject(state, { loading: false, list: {}, option: {},errors: action.errors  })
}
const productDetailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionProduct.GET_DETAIL_PRODUCT:
            return detail(action, state);
        case actionProduct.GET_DETAIL_PRODUCT_SUCCESS:
            return detailSuccess(action, state);
        case actionProduct.GET_DETAIL_PRODUCT_FAIL:
            return detailFailed(action, state);
        default :
            return state;
    }
}

export default productDetailReducer;
