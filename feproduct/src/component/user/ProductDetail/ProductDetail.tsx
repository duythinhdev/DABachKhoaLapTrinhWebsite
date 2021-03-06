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
                        <h3>M?? T??? S???N PH???M</h3>
                    </div>
                    <div className="whitenews__productdetail--content">
                        <p>
                          {item.description}
                        <span className={isSeeMore ? "read-more-text--show" : "read-more-text"}>
                        Ch??m S??c To??n Di???n Cho ????i M???t
                        B???n s??? lu??n y??n t??m ????i m???t c???a m??nh lu??n ???????c b???o v??? khi s??? d???ng tr??n chi???c m??n h??nh n??y v???i c??ng ngh??? b???o v??? m???t ti??n ti???n gi??p gi???m thi???u t??nh tr???ng m???i m???t khi d??ng trong th???i gian d??i. C??ng ngh??? Flicker Free lo???i b??? t??nh tr???ng nh???p nh??y kh?? ch???u th?????ng th???y tr??n m??n h??nh, trong khi ch??? ????? Eye Saver gi???m thi???u t??c h???i c???a ??nh s??ng xanh.
                            </span></p>
                        <div className="productdetail__btn">
                            <button className="read-more-btn" onClick={(event: any )=>clickShowMore(event)}>{isSeeMore ? "R??t G???n..." : "Xem Th??m..." }</button>
                        </div>
                    </div>
                </div>
                <div className="whitenews__involve">
                    <div className="whitenews__involve--titleoffer">
                        <h3>TIN T???C LI??N QUAN</h3>
                    </div>
                    <div className="whitenews__involve--content">
                        <div className="involve__img">
                            <img src={image} />
                        </div>
                        <div className="involve__content">
                            <span>Dell Ultrasharp U2422H Nh??n Em L?? Anh Qu???t Li???n</span>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whitenewscomment">
                    <div className="whitenewscomment__title">
                        <h3>H???I ????P</h3>
                    </div>
                    <div  className="whitenewscomment__content">
                        <div className="whitenewscomment__content--img">
                                <img src={NoAvatar}/>
                        </div>
                        <div  className="whitenewscomment__content--text">
                            <textarea placeholder="N???i Dung" onClick={(event:any)=> clickShowContentComment(event)} ></textarea>
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