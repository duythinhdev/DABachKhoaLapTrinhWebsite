export interface  signUps { 
    type: "SIGNUPS_APP_USER",
    fullName?:string,
    email?:string,
    password?:string,
    phone?:string,
    address?:string,
    city?:string,
    gender?:string
    status: number
}
export type loginSuccess = {
    accessToken: string,
    address: string,
    email: string,
    full_name: string,
    gender: Boolean,
    is_active: number,
    message: string,
    phone_number:  string,
    role: string,
    permission: number

}
export interface login {
    type: "LOGIN_APP_USER",
    email:string
    password: string,
    status: number,
    data: loginSuccess,
    currentUser: object,
    isLoginUser: boolean,
    title: string,
    titleLogin: string ,
    accessToken: string
}
export type forgot = {
    type: "FORGOT_USER",
    email: string,
}
export type typeStatus = {
    type: "FORGOT_USER_STATUS",
    info: string;
    error: string
}
export type changePassword = {
    type: "CHANGE_PASSWORD_USER",
    passwordOld: string,
    passwordNew: string
}

export interface actionRegister {
    data: typeRegister
}
export interface typeRegister {
    username?: string;
    full_name?: string;
    permission?: number;
    is_active?: number;
    address?: string;
    gender?: number,
    phone_number?: string;
    provinces?:string;
    ward?: string;
    district?: string;
    birthDay?: string;
    password?: string;
}