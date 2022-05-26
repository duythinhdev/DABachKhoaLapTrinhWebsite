import React,{useState,useEffect} from 'react';
import "./LayoutUser.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import Footer from "../../component/user/footer/footer";
import SliderProduct from "../../component/user/SliderProduct/SliderProduct";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../enviroment/enviroment";
import CategoryProducts from "../../component/user/CategoryProducts/CategoryProducts";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";

import useFetchingData from "../../component/user/TopProduct/useFetchingData";

export type  images = {
    _id: string,
    public_id: string,
    url:string
}
export type options = {
    _id:string,
    type: string,
    size: string,
    code: string,
    price: number,
    quantity: number,
    specifications: string,
}
export type product = {
    _id: string,
    Product_name: string,
    images: Array<images>,
    description: string,
    options: Array<options>,
    totalAmount: number,
    quantityCart: number,
}
type tsCategoryProduct = {
    updatedAt: string,
    createdAt: string,
    name: string,
    _id: string,
    product: Array<product>
} 
const LayoutUser = () => {
    let ctProduct = enviroment.localNode + "ctproduct/get";
    let { data } = useFetchingData(ctProduct);
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <SliderProduct />
            {
               data?.map((res: tsCategoryProduct,index:number) => {
                    return <CategoryProducts response={res}  indexs={index}/> 
                })
            }
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div >
    );
}

export default React.memo(LayoutUser);
