const GET_DETAIL_PRODUCT: any = "GET_DETAIL_PRODUCT";
const GET_DETAIL_PRODUCT_SUCCESS: any = "GET_DETAIL_PRODUCT_SUCCESS";
const GET_DETAIL_PRODUCT_FAIL: any = "GET_DETAIL_PRODUCT_FAIL";
export {
    GET_DETAIL_PRODUCT,
    GET_DETAIL_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_FAIL,
};

const detailProduct = (id: string | null) => {
    return {
        type: GET_DETAIL_PRODUCT,
        id: id
    }
}
const detailProductSuccess = (data: string,option: Object) => {
    return {
        type: GET_DETAIL_PRODUCT_SUCCESS,
        data: data,
        option: option,
    }
}
const detailProductFailed = (error: string) => {
    return {
        type: GET_DETAIL_PRODUCT_FAIL,
        error: error
    }
}

export {
    detailProduct,
    detailProductSuccess,
    detailProductFailed
}