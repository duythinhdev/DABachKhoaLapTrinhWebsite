import * as action from "./actiontypes";


export const getNewsUser = () =>  {
    return {
        type: action.NEWS_USER,
    }
}
export const dataNewsUser = (data: Array<any>) => {
    // console.log("data",data);
    return {
        type: action.DATA_NEWS_USER,
        data: data
    }
}