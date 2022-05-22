import * as action from "./actiontypes";


export const cartUser = (data: any) => {
    return {
        type: action.CART_USER,
        data: data
    }
}

export const removeCartUser = () => {
    return {
        type: action.REMOVE_CART_USER,
    }
}

export const removeDetailCartUser = (id:number) => {
    return {
        type: action.REMOVE_DETAIL_CART_USER,
        id: id
    }
}

export const increaseProductCart = (id:number) => {
    return {
        type: action.INCREASE_DETAIL_CART_USER,
        id: id
    }
}