import * as action from "./actiontypes";
import { Product,actionTypeCart } from "../../types/productType";

export const addCartUser = (data: Product) => {
    return {
        type: action.ADD_CART_USER,
        data: data
    }
}

export const removeAllCartUser = () => {
    return {
        type: action.REMOVE_CART_USER,
    }
}

export const removeDetailCartUser = (id: actionTypeCart) => {
    return {
        type: action.REMOVE_DETAIL_CART_USER,
        id: id
    }
}

export const increaseMinusCart = (id: actionTypeCart, calculation: actionTypeCart) => {
    return {
        type: action.INCREASE_DETAIL_CART_USER,
        id: id,
        calculation:calculation
    }
}
export const loadTotalMoney = () => {
    return {
        type: action.LOAD_TOTAL_CART,
    }
}