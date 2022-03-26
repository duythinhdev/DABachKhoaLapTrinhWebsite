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
const dataDetail:Array<any> = [
    {
        detail: "Acer VG240Y UM.QV0SS.001 – Đen"
    },
    {
        detail: "- Kích thước: 23.8 inch"
    },
    {
        detail: " - Tấm nền: IPS"
    },
    {
        detail: "- Độ phân giải: Full HD (1920x1080)"
    },
    {
        detail: "- Tốc độ làm mới: 75Hz"
    },
    {
        detail: "- Kích thước: 23.8 inch"
    },
    {
        detail: "- Thời gian đáp ứng: 1ms"
    },
    {
        detail: " - Cổng kết nối: VGA, HDMI"
    },
    {
        detail: "- Phụ kiện: Cáp nguồn, VGA, HDMI"
    },
]
const ProductDetail = () => {

    const [detailComment,setDetailComment] = useState(false) as any | Boolean;
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;
    const [nameTitle, setNameTitle] = useState({} as Object);
    const clickShowContentComment = (event:  React.FormEvent<HTMLInputElement>): void  => {
        event.preventDefault();
        setDetailComment(true)
    }
    const clickHideContentComment = (): void => {
        setDetailComment(false)
    }
    const clickShowMore  = (event:  React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setSeeMore(!seeMore);    
    }
    const HandleClick = (name: string,index: number): void => {
        borderProductdetail(true,index)
        setNameTitle(name)
    }
    const borderProductdetail = (loadFirts:Boolean = false,index:any =  null): void => {
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
    useEffect(()=> {
        borderProductdetail(false,null);
    },[])
    return (
        <section className="Container__ProductDetail">
         
            <ProductDetailsView dataDetail={dataDetail}  ImageProductDetail={ImageProductDetail} />

            <div  className="whitenews">
                <div className="whitenews__productdetail">
                    <div className="whitenews__productdetail--title">
                        <h3>MÔ TẢ SẢN PHẨM</h3>
                    </div>
                    <div className="whitenews__productdetail--content">
                        <p>Màn hình máy tính Samsung LF22T350FHEXXV 21.5 inch FHD
                        Mở Rộng Góc Nhìn Hiệu Quả
                        Thiết kế tràn viền 3 cạnh giúp mọi không gian làm việc trở nên gọn gàng nhưng vẫn đảm bảo khả năng truyền tải liền mạch mọi nội dung một cách hoàn hảo, cho phép tập trung vượt trội, ngay cả khi thiết lập đa màn hình cùng lúc.
                        Sắc Màu Chân Thực 
                        Với tấm nền IPS đem tới sắc màu sống động và rõ ràng đến từng chi tiết ở mọi góc nhìn. Hiển thị chính xác từng tông màu và sắc thái ở hầu hết mọi góc độ.
                        Đồng Bộ Mọi Khung Hình 
                        Màn hình được tích hợp công nghệ AMD Radeon FreeSync™ đồng bộ tốc độ quét của card đồ họa và màn hình, giảm thiểu tình trạng xé hình và lặp hình thường thấy, trải nghiệm giải trí với trải nghiệm không gián đoạn. Với các khung hình nhanh cũng được xử lý liền mạch và mượt mà.
                        <span className={seeMore ? "read-more-text--show" : "read-more-text"}>
                        Mượt Mà Trong Từng Khung Hình
                        Với tần số quét 75Hz giúp hiển thị mọi chuyển động mượt mà giúp người dùng có thể thưởng thức từng khung hình mà không còn bị giựt hình hay hiệu ứng bóng mờ.

                        

                        Sức Mạnh Chơi Game 
                        Tối ưu màu sắc và độ tương phản, cho khung cảnh rực rỡ và giúp bạn dễ dàng phát hiện kẻ địch đang ẩn nấp trong bóng tối. Chế độ Game Mode tùy chỉnh khung hình với mọi dòng game mang lại cho bạn những lợi thế vượt trội, bứt phá để dành chiến thắng.

                            

                        Chăm Sóc Toàn Diện Cho Đôi Mắt
                        Bạn sẽ luôn yên tâm đôi mắt của mình luôn được bảo vệ khi sử dụng trên chiếc màn hình này với công nghệ bảo vệ mắt tiên tiến giúp giảm thiểu tình trạng mỏi mắt khi dùng trong thời gian dài. Công nghệ Flicker Free loại bỏ tình trạng nhấp nháy khó chịu thường thấy trên màn hình, trong khi chế độ Eye Saver giảm thiểu tác hại của ánh sáng xanh.
                            </span></p>
                        <div className="productdetail__btn">
                            <button className="read-more-btn" onClick={(event: any)=>clickShowMore(event)}>{seeMore ? "Rút Gọn..." : "Xem Thêm..." }</button>
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
                        {detailComment && <ModalComment clickHideContentComment={clickHideContentComment} />}
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