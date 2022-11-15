

const GET_ALL_LOCATION: any = "GET_ALL_LOCATION";
const GET_ALL_LOCATION_SUCCESS: any = "GET_ALL_LOCATION_SUCCESS";
const GET_ALL_LOCATION_FAIL: any = "GET_DETAIL_LOCATION_FAIL";
export {
    GET_ALL_LOCATION,
    GET_ALL_LOCATION_SUCCESS,
    GET_ALL_LOCATION_FAIL,
};

const getLocation = () => {
    return {
        type: GET_ALL_LOCATION,
    }
}
const getLocationSuccess = (list: any) => {
    return {
        type: GET_ALL_LOCATION_SUCCESS,
        list: list,
    }
}
const getLocationFailed = (error: string) => {
    return {
        type: GET_ALL_LOCATION_FAIL,
        error: error
    }
}

export {
    getLocation,
    getLocationSuccess,
    getLocationFailed
}