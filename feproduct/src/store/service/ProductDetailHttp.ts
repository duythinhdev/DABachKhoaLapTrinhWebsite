/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpRequest } from "../../store/share/Request";
export const ApiRoutes = {
  DETAIL: "products/getdetail",
};
export class ProductDetailHttp {
  request: any;
  endPoint: any;
  constructor(endPoint: any) {
    this.request = new HttpRequest(endPoint).request;
    this.endPoint = endPoint;
  }
  detail = (id: string) => {
    return this.request.get(`${ApiRoutes.DETAIL}?id=${id}`);
  };
}
