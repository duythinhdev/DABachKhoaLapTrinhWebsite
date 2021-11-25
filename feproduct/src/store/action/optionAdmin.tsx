import * as action from "./actiontypes";


export const postOption = (size: string,Types: string,price: number,quantity: number,product_id:number) =>  {
    return {
        type: action.POST_DATA_OPTION_ADMIN,
        size: size,
        Types: Types,
        price: price,
        quantity: quantity,
        product_id: product_id,
    }
}

export const getOption = (pagenumber:number,pagesize:number) => {
    return {
        type: action.GET_DATA_OPTION_ADMIN,
        pagenumber: pagenumber,
        pagesize: pagesize,
    }
}
export const deleteOption = (id: number) => {
    return {
        type: action.DELETE_DATA_OPTION_ADMIN,
        id: id,
    }
}
export const putOption = (id: number,size: string,Types: string,price: number,quantity: number,product_id: number,created_at:string,updated_at:string) => {
    return {
        type: action.PUT_DATA_OPTION_ADMIN,
        id: id,
        size: size,
        Types: Types,
        price: price,
        quantity: quantity,
        product_id: product_id,
    }
}
