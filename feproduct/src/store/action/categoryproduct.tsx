import * as action from "./actiontypes";

export const postCategory = (name: string) =>  {
    return {
        type: action.POST_CATEGORY_PRODUCT_ADMIN,
        name: name
    }
}
export const putCategory = (id: number,name: string) =>  {
    return {
        type: action.PUT_CATEGORY_PRODUCT_ADMIN,
        name: name,
        id: id
    }
}
export const deleteCategory = (id: number) =>  {
    return {
        type: action.DELETE_CATEGORY_PRODUCT_ADMIN,
        id: id
    }
}

export const detailproduct = (res: any) => {
    return {
        type: action.FETCH_GET_DETAIL_PRODUCT,
        res: res
    }
}
export const getDetailProduct = (id:number) => {
    return {
        type: action.GET_DETAIL_PRODUCT,
        id: id
    }
}
