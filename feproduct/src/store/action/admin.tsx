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
export const navIsAdminOptionOrder = (isNavAdminOptionOrder:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_OPTION_ORDER,
        isNavAdminOptionOrder: isNavAdminOptionOrder
    }
}
export const navIsAdminOrder = (isNavAdminOrder:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_BODY_ORDER,
        isNavAdminOrder: isNavAdminOrder
    }
}
export const navIsAdminNews = (isNavAdminNews:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_NEWS,
        isNavAdminNews: isNavAdminNews
    }
}
export const navIsAdminComment = (isNavAdminComments:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_COMMENTS,
        isNavAdminComments: isNavAdminComments
    }
}
export const navIsAdminCategory = (isNavAdminCategoryProduct:boolean) => {
    return {
        type: action.IS_NAV_ADMIN_CATEGORY_PRODUCT,
        isNavAdminCategoryProduct: isNavAdminCategoryProduct
    }
}
export const isMenuAdmin = (menuLeft:boolean) => {
    return {
        type: action.IS_NAV_MENU_LEFT,
        menuLeft:menuLeft
    }
}
export const dataProduct  = (fd:any) => {
    console.log("fd",fd);
    return {
        type: action.POST_DATA_PRODUCT_ADMIN,
        fd: fd
    }
}
export const putDataProduct  = (fd:any) => {
    return {
        type: action.POST_DATA_PRODUCT_ADMIN,
        fd: fd
    }
}
export  const dataProductImage = (image:any) => {
    return {
        type: action.POST_DATA_PRODUCT_ADMIN,
        image: image,
    }
}
export const PostProduct = (title: any,status: boolean)  => {
    return {
        type: action.STATUS_SUCCESS_POST_PRODUCT,
        title: title,
        status: status
    }
}
export const discoloration = ( discolor:string) => {
    return {
        type: action.STATUS_DISCOLORATION,
        discolor: discolor,
    }
}