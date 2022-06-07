export interface ActionLogin{
    currentUser: currentUser,
    isLoginUser: boolean,
    status: boolean,
    type: string,
    title: string,
    titleLogin: string,
    isLoadToast: boolean,
    titleLogout: string
    isChangePassword: Boolean,
    nameChangePassword: string,
    tokenUser: string,
}
export type  currentUser = {
    role: string,
    _id: string,
    email: string,
    full_name: string,
    permission: number,
    is_active: number,
    gender: Boolean,
    address: string,
    phone_number: number,
    city: string,
    password: string,
}
export interface tsInitialState {
    isLoginUser: boolean,
    currentUser: Object;
    statusForgot:  boolean;
    titleforgot: string,
    titleLogin: string,
    isLoadToast: Boolean,
    titleLogout: string,
    nameChangePassword: string,
    isChangePassword: Boolean
}