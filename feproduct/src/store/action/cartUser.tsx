import * as action from "./actiontypes";

export type  images = {
    _id: string,
    public_id: string,
    url:string
}
export type options = {
    _id:string,
    type: string,
    size: string,
    code: string,
    price: number,
    quantity: number,
    specifications: string,
}
export  type product = {
    _id: string,
    Product_name: string,
    images: Array<images>,
    description: string,
    options: Array<options>,
    totalAmount: number,
    quantityCart: number,
}
export const addCartUser = (data: product) => {
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