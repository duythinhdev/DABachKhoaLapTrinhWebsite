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
import useFetchingTopProduct from "../../component/user/TopProduct/useFetchingTopProduct";
const LayoutUser = () => {
    let ctProduct = enviroment.localNode + "ctproduct/get";
    let { data } =  useFetchingTopProduct(ctProduct);
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <SliderProduct />
            {
               data?.map((res: any,index:number) => {
                    return <CategoryProducts response={res} indexs={index}/> 
                })
            }
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div >
    );
}

export default React.memo(LayoutUser);
