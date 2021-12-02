import axios, {AxiosRequestConfig} from 'axios';
import {enviroment} from "../enviroment/enviroment";
const fetchClient = () => {
    const defaultOptions:any = {
        baseURL: enviroment.local,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Create instance
    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(function (config: any | undefined) {
        const token =  JSON.parse(localStorage.getItem('tokenAdmin') as any | string)
        if(token)
        {
            config.headers.Authorization =  token ? `Bearer ${token}` : '';
            return config;
        }
    });

    return instance;
};

export default fetchClient();
