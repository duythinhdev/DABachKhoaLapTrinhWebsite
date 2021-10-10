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
export const isMenuAdmin = (menuLeft:boolean) => {
    console.log(menuLeft);
    return {
        type: action.IS_NAV_MENU_LEFT,
        menuLeft:menuLeft
    }
}
