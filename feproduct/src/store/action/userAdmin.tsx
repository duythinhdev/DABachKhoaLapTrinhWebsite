import * as action from "./actiontypes";

export const postUser = (permission: number,full_name: string,address: string,name:string,phone: number,username:string,password:string) =>  {
    return {
        type: action.POST_USER_ADMIN,
        permission: permission,
        full_name: full_name,
        address: address,
        name: name,
        phone: phone,
        username: username,
        password: password
    }
}
export const putUser = (id: number,permission: number,full_name: string,address: string,name:string,phone: number,username:string,password:string,created_at:any,updated_at:any) =>  {
    return {
        type: action.PUT_USER_ADMIN,
        id: id,
        permission: permission,
        full_name: full_name,
        address: address,
        name: name,
        phone: phone,
        username: username,
        password: password,
        created_at: created_at,
        updated_at: updated_at
    }
}
export const deleteUser = (id: number) =>  {
    return {
        type: action.DELETE_USER_ADMIN,
        id: id
    }
}
