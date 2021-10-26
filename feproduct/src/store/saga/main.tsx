import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as Actions from "../action/index";

export function* postProduct(actions: any) {
    const { product_name, image,description,id_catergory_product } = actions;
    let body = {
        product_name: product_name,
        image: image,
        description: description,
        id_catergory_product: id_catergory_product,
    }
    let urlLogin = 'v1/product/post';
    try {
        const response:Promise<any> =  yield axios.post(enviroment.local + urlLogin, body);
        yield put(Actions.PostProduct("post success",true))
    }
    catch (error) {
        put(Actions.PostProduct("post fail",false))
    }
}
