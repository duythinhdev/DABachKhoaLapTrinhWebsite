import axios, {AxiosRequestConfig} from 'axios';
import {enviroment} from "../enviroment/enviroment";
import * as action from "../store/action/index";
import jwt_decode from "jwt-decode";

const refreshToken = async () => {
  try {
    const res = await axios.post(enviroment.localNode + `/v1/user/refresh`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createAxios = (user:any, dispatch:any = null, stateSuccess:any) => {
  let header =   {
    headers: {
      'Content-Type': 'application/json',
    },
  } 
  const newInstance = axios.create(header);   
  newInstance.interceptors.request.use(
    async (config: any) => {
      let date = new Date();
      const decodedToken:any = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data:any = await refreshToken();
        console.log("data",data);
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(data,true,"refresh token success"));
        config.headers["Authorization"] = `Bearer ${data.accessToken}`
      } else {
        config.headers["Authorization"] = `Bearer ${user.accessToken}`
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};

// const createAxios = () => {
//     const defaultOptions:any = { 
//         baseURL: enviroment.local,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     // Create instance
//     let instance = axios.create(defaultOptions);

//     // Set the AUTH token for any request
//     instance.interceptors.request.use(function (config: any | undefined) {
//         const token =  JSON.parse(localStorage.getItem('tokenUser') as any | string)
//         if(token){
//             config.headers.Authorization =  token ? `Bearer ${token}` : '';
//             return config;
//         }
//     });

//     return instance;
// };

// export default createAxios;
