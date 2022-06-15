export type  Images = {
    _id: string,
    public_id: string,
    url:string
}
export type Options = {
    _id:string,
    type: string,
    size: string,
    code: string,
    price: number,
    quantity: number,
    specifications: string,
}
export type Product = {
    _id: string,
    Product_name: string,
    images: Array<Images>,
    description: string,
    options: Array<Options>,
    totalAmount: number,
    quantityItems: number,
}
export interface actionTypeCart {
    type: string,
    data: Product,
    id: number,
    calculation:string
}
export interface tsInitialState {
    status: string,
    cart: Product[],
    quantityItems: number,
    totalMoney: number
}
export type tsCategoryProduct = {
    updatedAt: string,
    createdAt: string,
    name: string,
    _id: string,
    product: Array<Product>
} 
export interface fetchComments {
    readonly  data: Product[],
    readonly  totalPage: number
}
export interface actionsInforPostOrder  {
    fullName:string,
    phoneNumber:string,
    address:string,
    gender:string,
    city:string,
    email:string,
    cart: Product[],
    totalMoney: number
}
export interface propsListCategoryProduct {
    moveDetail: (index: number)=> void
    moveDetailOver: () => void,
    res:Product,
    index:number,
    indexProductDetail: number,
    isHoverDetail: Boolean
}