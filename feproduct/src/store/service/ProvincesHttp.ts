/* eslint-disable @typescript-eslint/no-unused-vars */
import {HttpRequest} from "../../store/share/Request";

export const ApiRoutes = {
    LIST: "location/all",
};

export class ProvincesHttp {
    request: any;
    endPoint: any;

    constructor(endPoint: any) {
        this.request = new HttpRequest(endPoint).request;
        this.endPoint = endPoint;
    }

    list = () => {
        return this.request.get(ApiRoutes.LIST);
    };
}
