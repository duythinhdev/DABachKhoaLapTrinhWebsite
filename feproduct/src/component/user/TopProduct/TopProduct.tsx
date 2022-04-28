import React from 'react';
import "./TopProduct.scss";
import useFetchingTopProduct from "../TopProduct/useFetchingData";
import {
    useLocation
  } from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";
import Spinner from "../../../component/spinner/spinner.jsx";
const Product:Array<any> = [
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },   
     {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
    {
        code: "Mã SP : PCAP102",
        name:"PC Gaming-Máy tính chơi game PCAP PRO",
        pricePromotion: "34.499.000 đ",
        price:"32.749.000 đ",
        promotion: "1 khuyến mại",
        compare: "So sánh",
    },
]
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const TopProduct = () => {
    let query = useQuery();
    let idctProduct = query.get("idctproduct");
    console.log("idctProduct",idctProduct)
    let ctProduct = enviroment.localNode + `ctproduct/of?categoryProductId=${idctProduct}`;
    let { data } = useFetchingTopProduct(ctProduct);
    return (
        <div className='containter__TopProduct'>
            <div className='name__TopProduct'>
                <a>Home  </a>
                <span>   Sản Phẩm Bán Chạy</span>
            </div>
            <div className='title__TopProduct'>
                <div className='title__TopProduct--name'>
                    <span>BỘ LỌC</span>
                </div>
                <div className='title__TopProduct--filter'>
                    <div className='TopProduct--filter__Brand'>
                    
                    </div>
                    <div className='TopProduct--filter__About'>
                
                    </div>
                </div>
            </div>
            <div className='content__TopProduct'>
                <div className='content__TopProduct--title'>
                
                </div>
                <div className='content__TopProduct--container flex-box'>
                    {
                        data?.map((res:any,index:number) => {
                          return  <div className='product__item'>
                                    <div className='product__item--img'>
                                    <img src={res?.productImage[0]} />
                                    </div>
                                    <div className='product__item--code'>
                                            {res?._id}
                                    </div>
                                    <div className='product__item--name'>
                                            {res?.Product_name}
                                    </div>
                                    <div className='product__item--pricemotion'>
                                            {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </div>
                                    <div className='product__item--price'>
                                            {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </div>
                                    <div className='product__item--motion'>
                                            <span>1 Khuyến Mãi</span>
                                    </div>
                                    <div className='product__item--compare'>
                                            <span>So Sanh</span>
                                    </div>
                                </div>
                        })
                    }
                </div>
                <div className='content__TopProduct--pagination'>

                </div>
            </div>
        </div>
    );
}

export default TopProduct;