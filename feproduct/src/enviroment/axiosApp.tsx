import axios, {AxiosRequestConfig} from 'axios';
import {enviroment} from "../enviroment/enviroment";

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

export const createAxios = (user:any, dispatch:any, stateSuccess:any) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config: any) => {
      let date = new Date();
      const decodedToken:any = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data:any = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["Authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
// const fetchClient = () => {
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
//         if(token)
//         {
//             config.headers.Authorization =  token ? `Bearer ${token}` : '';
//             return config;
//         }
//     });

//     return instance;
// };

// export default fetchClient();
