import React from 'react';
import "../ProductDetail/ProductDetail.scss";
// import { motion } from  'framer-motion/dist/framer-motion'
import { useRef, useEffect, useState } from "react";

import image from "../../../asset/newsoffer/120_7828_dell_ultrasharp_u2422h_thumb4.jpg";
import NoAvatar from "../../../asset/newsoffer/noavatar.jpg";
import ModalComment from "./ModalComment/ModalComment";
import ImageProductDetail from "./ProductDetailImage";
import ProductDetailsView from "./ProductDetailsView/ProductDetailsView";
import { TabName } from "./constants";
import BodyProductList from "./BodyProductList";
import useQueryLocation from "../hook/useQueryLocation";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";

const TabNames = [{
    Name: TabName.ProductDetails.ProductSimilar,
},
{
    Name: TabName.ProductDetails.ProductBrand,
},
{
    Name: TabName.ProductDetails.ProductInvolve,
},
]
const ProductDetail = () => {
    const [isDetailComment,setIsDetailComment] = useState(false) as any | Boolean;
    const [isSeeMore,setIsSeeMore] = useState(false) as any | Boolean;
    const [nameTitle, setNameTitle] = useState({} as Object);
    const [item,setItem] = useState({}) as any | Object | undefined ;
    const [option,setOption] = useState({}) as any | string;
    const clickShowContentComment = (event:  React.FormEvent<HTMLInputElement>): void  => {
        event.preventDefault();
        setIsDetailComment(true)
    }
    const clickHideContentComment = (): void => {
        setIsDetailComment(false)
    }
    const clickShowMore  = (event:  React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setIsSeeMore(!isSeeMore);    
    }
    const HandleClick = (name: string,index: number): void => {
        borderProductdetail(true,index)
        setNameTitle(name)
    }
    const borderProductdetail = (loadFirts:Boolean = false,index: number | null | any =  null): void => {
        let borderClick = document.getElementsByClassName('product__similar') as  HTMLCollectionOf<HTMLElement>;
        if(!loadFirts){
            borderClick[0].style.borderBottom = '4px solid #546ce8';
            borderClick[0].style.color = '#546ce8';
            borderClick[0].style.cursor = 'pointer';
        }
        else {
            for(let i = 0 ; i < borderClick.length; i++)
            {
                borderClick[i].style.borderBottom = '';
                borderClick[i].style.color = '';
            }
            borderClick[index].style.borderBottom = '4px solid #546ce8';
            borderClick[index].style.color = '#546ce8';
            borderClick[index].style.cursor = 'pointer';
        }
    }
    const mouseTransition = (index: number) => {
        let borderClick = document.getElementsByClassName('product__similar') as  HTMLCollectionOf<HTMLElement>;
        for(let i = 0 ; i < borderClick.length; i++)
        {
            borderClick[i].style.borderBottom = '';
            borderClick[i].style.color = '';
            borderClick[i].style.transition = '';
        }
        borderClick[index].style.borderBottom = '4px solid #546ce8';
        borderClick[index].style.transition = '0.5s';
        borderClick[index].style.cursor = 'pointer';    
    }

    let query = useQueryLocation();
    let idProduct = query.get("idproduct");
    async function fetchProduct() {
        await axios.get(enviroment.localNode + `products/getdetail?id=${idProduct}`).then((res:any) => { 
            setOption(res.data.data?.options[0]);
            setItem(res.data.data)
        })
    }

    useEffect(()=> {
        borderProductdetail(false,null);
        fetchProduct();
    },[])
    return (
        <section className="Container__ProductDetail">
         
            <ProductDetailsView
                item={item} 
                option={option} 
            />

            <div  className="whitenews">
                <div className="whitenews__productdetail">
                    <div className="whitenews__productdetail--title">
                        <h3>MÔ TẢ SẢN PHẨM</h3>
                    </div>
                    <div className="whitenews__productdetail--content">
                        <p>
                          {item.description}
                        <span className={isSeeMore ? "read-more-text--show" : "read-more-text"}>
                        Chăm Sóc Toàn Diện Cho Đôi Mắt
                        Bạn sẽ luôn yên tâm đôi mắt của mình luôn được bảo vệ khi sử dụng trên chiếc màn hình này với công nghệ bảo vệ mắt tiên tiến giúp giảm thiểu tình trạng mỏi mắt khi dùng trong thời gian dài. Công nghệ Flicker Free loại bỏ tình trạng nhấp nháy khó chịu thường thấy trên màn hình, trong khi chế độ Eye Saver giảm thiểu tác hại của ánh sáng xanh.
                            </span></p>
                        <div className="productdetail__btn">
                            <button className="read-more-btn" onClick={(event: any )=>clickShowMore(event)}>{isSeeMore ? "Rút Gọn..." : "Xem Thêm..." }</button>
                        </div>
                    </div>
                </div>
                <div className="whitenews__involve">
                    <div className="whitenews__involve--titleoffer">
                        <h3>TIN TỨC LIÊN QUAN</h3>
                    </div>
                    <div className="whitenews__involve--content">
                        <div className="involve__img">
                            <img src={image} />
                        </div>
                        <div className="involve__content">
                            <span>Dell Ultrasharp U2422H Nhìn Em Là Anh Quất Liền</span>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whitenewscomment">
                    <div className="whitenewscomment__title">
                        <h3>HỎI ĐÁP</h3>
                    </div>
                    <div  className="whitenewscomment__content">
                        <div className="whitenewscomment__content--img">
                                <img src={NoAvatar}/>
                        </div>
                        <div  className="whitenewscomment__content--text">
                            <textarea placeholder="Nội Dung" onClick={(event:any)=> clickShowContentComment(event)} ></textarea>
                        </div>
                        {isDetailComment && <ModalComment clickHideContentComment={clickHideContentComment} />}
                    </div>
            </div>
            <div className="whiteProductList">
                    <div className="whiteProductList__title">
                        {
                            TabNames.map((item: any, index: number) => {
                                return <h3 className="product__similar" key={index} onMouseOver={()=>mouseTransition(index)} onClick={() => HandleClick(item.Name,index)}>{item.Name}</h3>
                            })
                        }
                    </div>
                    <BodyProductList  tab={nameTitle} />
            </div>
        </section>
    );
}

export default ProductDetail;