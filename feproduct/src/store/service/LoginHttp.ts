/* eslint-disable @typescript-eslint/no-unused-vars */
import {HttpRequest} from "../../store/share/Request";

export const ApiRoutes = {
    LOGIN: "users/login",
};

export class LoginHttp {
    request: any;
    endPoint: any;

    constructor(endPoint: any) {
        this.request = new HttpRequest(endPoint).request;
        this.endPoint = endPoint;
    }

    login = (data: any) => {
        return this.request.post(ApiRoutes.LOGIN, data);
    };
    register = () => {
        return this.request.post();
    }
}
