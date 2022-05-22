
import React,{useState, useEffect} from 'react';
import {
    useLocation
  } from "react-router-dom";
import axios, {AxiosResponse} from "axios";

export default (dataSource: string) => {
    let [data,setData] = useState<Array<any>>([]);
    let [totalpage, setTotalPage] = useState<Number>();
    useEffect(()=> {
        let fetchDataProduct = async () => {
            await axios.get(dataSource).then((res: any) => {
              setData(res.data.data)
            });
         }
        fetchDataProduct();
    },[dataSource])
  
    return { data,totalpage };
  };