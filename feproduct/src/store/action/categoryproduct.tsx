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
export const deleteCategory = (id: any) =>  {
    return {
        type: action.DELETE_CATEGORY_PRODUCT_ADMIN,
        id: id
    }
}
