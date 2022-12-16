/* eslint-disable @typescript-eslint/no-unused-vars */
import {HttpRequest} from "../../store/share/Request";

export const ApiRoutes = {
    REGISTER: "users/signups",
    LOGIN: "users/login",
    DETAIL: "users/detail",
};

export class AuthHttp {
    request: any;
    endPoint: any;

    constructor(endPoint: any) {
        this.request = new HttpRequest(endPoint).request;
        this.endPoint = endPoint;
    }

    login = (data: any) => {
        return this.request.post(ApiRoutes.LOGIN, data);
    };
    register = (data: any) => {
        return this.request.post(ApiRoutes.REGISTER,data);
    }
    detail = () => {
        return this.request.get(ApiRoutes.DETAIL);
    }
}
