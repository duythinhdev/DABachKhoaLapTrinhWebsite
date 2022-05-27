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
export interface login {
    type: "LOGIN_APP_USER",
    email:string
    password: string,
    status: number,
    data: any,
}