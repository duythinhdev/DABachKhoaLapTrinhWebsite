/* eslint-disable @typescript-eslint/no-unused-vars */
import apisauce, { ApiResponse } from 'apisauce';
import { get, isEmpty, snakeCase } from 'lodash';

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(url, options);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}

/**
 * Create Http Instance
 * @param  {string} APIEndpoint      The URL we want to request
 *
 * @return {HttpRequest}             The HttpRequest
 */
export class HttpRequest {
  request: any;
  localService: any;

  constructor(APIEndpoint: any) {
    this.request = apisauce.create({
      baseURL: APIEndpoint,
      headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '***',
        Accept: '*/*',
      },
      timeout: 25000,
    });
  }
}

/**
 * Config Api Request
 */

export function configRequest(request: any): any {
  const typeRequest = typeof request;
  let formatRequest: any = {};
  if (typeRequest === 'string') return snakeCase(request);
  if (typeRequest === 'object') {
    for (let i in request) {
      formatRequest[snakeCase(i)] = request[i];
    }
    return formatRequest;
  }
}

/**
 * Config Api Response
 */

export function configResponse(response: ApiResponse<any>): any | void {
  if (!response.ok) {
    if (isEmpty(response.data)) {
      throw new Error(response.problem);
    }
    const {
      data: { message, code, success },
    } = response;
    if (code === 400 || code === 404 || !success) {
      throw new Error(message);
    }
  }
  const {
    data: { result },
  } = response;
  if (result) return result;
  return response.data;
}

export function configResponses(response: ApiResponse<any>): any | void {
  if (!response.ok) {
    if (isEmpty(response.data)) {
      throw new Error(response.problem);
    }
    const {
      data: { message, code, success },
    } = response;
    if (code !== 200 || !success) {
      throw new Error(message);
    }
  }
  const {
    data: { result },
  } = response;
  if (result) return result;
  return response.data;
}
/**
 * Serialize URL QueryString
 */

export function parseQueryString(param: any, query: any) {
  return encodeURIComponent(param) + '=' + encodeURIComponent(query);
}

