const GET_PRODUCT: any = "GET_PRODUCT";
const GET_PRODUCT_SUCCESS: any = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAIL: any = "GET_PRODUCT_FAIL";
export {
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
};

const product = () => {
    return {
        type: GET_PRODUCT,
    }
}
const productSuccess = (data: any) => {
    console.log("data",data)
    return {
        type: GET_PRODUCT_SUCCESS,
        list: data,
    }
}
const productFailed = (error: string) => {
    return {
        type: GET_PRODUCT_FAIL,
        error: error
    }
}

export {
    product,
    productSuccess,
    productFailed
}