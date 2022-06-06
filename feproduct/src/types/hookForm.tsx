export type reGister = {
    fullName:  string,
    confirmPwd: string,
    email:string,
    password: string,
    phoneNumber:  string,
    gender:  string,
    address:  string,
    city:  string
}
export type ProductCart = {
    fullName:  string,
    email:string,
    phoneNumber:  string,
    gender:  string,
    address:  string,
    city:  string,
    Note: string,
    company: string,
    addressCompany: string,
    bank: string
}
export type changePassword = {
    passwordOld: string,
    confirmPwd: string,
    passwordNew: string,
}