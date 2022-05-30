import * as action from '../action/actiontypes';
import * as actionTypes from "./actiontypes";

export const postOrder = () => {
    return {
        type: actionTypes.POST_ORDER_CART,
    }
}