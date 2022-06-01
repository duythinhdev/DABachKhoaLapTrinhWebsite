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
}