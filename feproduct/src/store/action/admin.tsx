import * as action from "./actiontypes";

export const navIsAdminUser = (isNavAdminUser:boolean) => {
     return {
         type: action.IS_NAV_ADMIN_BODY_USER,
         isNavAdminUser:isNavAdminUser
     }
}
export const navIsAdminProduct = (isNavAdminProduct:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_BODY_PRODUCT,
        isNavAdminProduct:isNavAdminProduct
    }
}

