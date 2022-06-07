import * as action from "./actiontypes";

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
    console.log("discolor",discolor);
    return {
        type: action.STATUS_DISCOLORATION,
        discolor: discolor,
    }
}