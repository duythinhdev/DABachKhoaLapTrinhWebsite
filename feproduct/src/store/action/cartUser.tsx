import * as action from "./actiontypes";


export const addCartUser = (data: any) => {
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

export const removeDetailCartUser = (id:number) => {
    return {
        type: action.REMOVE_DETAIL_CART_USER,
        id: id
    }
}

export const increaseMinusCart = (id:number,calculation:string) => {
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