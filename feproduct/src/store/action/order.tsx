import * as action from '../action/actiontypes';
import * as actionTypes from "./actiontypes";
import {actionsInforPostOrder} from "../../types/productType";
export const postOrder = ({fullName,phoneNumber,address,gender,city,email,cart,totalMoney}: actionsInforPostOrder) => {
    return {
        type: actionTypes.POST_ORDER_CART,
        fullName:fullName,
        phoneNumber:phoneNumber,
        address: address,
        gender: gender,
        city: city,
        email: email,
        cart: cart,
        totalMoney: totalMoney
    }
}