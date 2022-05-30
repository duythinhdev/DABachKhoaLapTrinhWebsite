
import React,{useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function useFetchingData(ctProduct: string) {
    let [data,setData] = useState<Array<any>>([]);
    let fetchDataProduct = async () => {
      await axios.get(ctProduct).then((res: any) => {
        setData(res.data.data)
      }); 
   }
    useEffect(()=> {
        fetchDataProduct();
    },[])
  
    return { data };
  };