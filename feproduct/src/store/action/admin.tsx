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
export const navIsAdminReview = (isNavAdminReview:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_BODY_REVIEW,
        isNavAdminReview:isNavAdminReview
    }
}
export const navIsAdminOption = (isNavAdminOption:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_BODY_OPTION,
        isNavAdminOption: isNavAdminOption
    }
}
export const isMenuAdmin = (menuLeft:boolean) => {
    return {
        type: action.IS_NAV_MENU_LEFT,
        menuLeft:menuLeft
    }
}
export const dataProduct  = (product_name:string,image:string,description:string,id_catergory_product: number) => {
    return {
        type: action.POST_DATA_PRODUCT_ADMIN,
        product_name: product_name,
        image: image,
        description: description,
        id_catergory_product: id_catergory_product

    }
}
export const PostProduct = (title: any,status: boolean)  => {
    console.log("Action",title,status)
    return {
        type: action.STATUS_SUCCESS_POST_PRODUCT,
        title: title,
        status: status
    }
}
