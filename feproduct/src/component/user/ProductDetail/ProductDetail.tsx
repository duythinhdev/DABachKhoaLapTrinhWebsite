import React from 'react';
import "../ProductDetail/ProductDetail.scss";
// import { motion } from  'framer-motion/dist/framer-motion'
import { useRef, useEffect, useState } from "react";
import images from "./images";
import Payment from "../../../asset/Capture123.png";
import CheckIcon from '@mui/icons-material/Check';
import Promotion from "../../../asset/t3-2022-trang-sp-500x654.jpg";


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
const detailProduct:Array<any> = [
    {
        made: "Acer"
    },
    {
        
    },
    {
        
    },
]
const ProductDetail = () => {
    // const [width, setWidth] = useState() as any;
    // const carousel = useRef() as any ;
    // useEffect(() => {
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    //   }, []);
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;

    const enableSeeMore = () => {
        setSeeMore(true)
    }
    const disableSeeMore = () => {
        setSeeMore(false)
    }

    return (
        <section className="Container__ProductDetail">
            <div  className="bg__white">
                <div  className="product__image">
                        <div  className="product__image--img">
                            {/* <motion.div
                                ref={carousel}
                                className="carousel"
                                whileTap={{ cursor: "grabbing" }}
                            >
                                <motion.div
                                drag="x"
                                dragConstraints={{ right: 70, left: - width }}
                                className="inner-carousel"
                                >
                                {images.map((images, index) => {
                                    return (
                                    <motion.div className="item" key={index}>
                                        <img src={images} alt="" />
                                    </motion.div>
                                    );
                                })}
                                </motion.div>
                            </motion.div> */}
                        </div>
                        <div  className="product__image--zoom">

                        </div>
                        <div  className="product__image--detail">
                            <div className="product__detail">
                                <div className="product__detail--one">
                                    <span>
                                        Hãng sản xuất
                                    </span>
                                </div>
                                <div className="product__detail--two">
                                    <span>
                                        Laptop Asus
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
                <div  className="product__info">
                    <div  className="product__info--title">
                            <div className="info__name"> 
                                <span>Màn hình máy tính Acer VG270 UM.HV0SS.001 27'' Full HD 75Hz Gaming</span>
                            </div>
                            <div className="info__code"> 
                                <div className="info__code--name">
                                    <span>Mã SP: MOAC0047</span>
                                </div>
                                <div className="info__code--countstart">
                                    <span>5 đánh giá</span>
                                </div>
                                <div className="info__code--view">
                                     <span>Lượt xem: 40.274</span>
                                </div>
                                <div className="info__code--compare">
                                    <span> So sánh</span>
                                </div>
                            </div>
                    </div>
                    <div className="product__info--detail">
                        {
                            dataDetail.map((res: any,index: number) =>{
                                    return <span key={index}>{ index > 3 && seeMore ?  res.detail :  res.detail}</span>
                            })
                        }
                        <div>{seeMore ? <span onClick={() =>disableSeeMore()}>Thu Gọn</span> : <span onClick={() =>enableSeeMore()}> Xem Thêm</span>}</div>
                    </div>
                    <div className="product__info--price">
                            <div className="info__Listed--price">
                                <h5>Giá niêm yết:</h5>
                                <span>23.990.000 đ</span>
       
                            </div>
                            <div className="info__Promotion--price">
                                <h5>Giá khuyến mại:	</h5>
                                <b>20.690.000 đ</b> <span>[Giá đã có VAT]</span>
                            </div>
                    </div>
                    <div className="product__info--promotion">
                        <div className="info__titlepromotion">
                            <div>Khuyến Mãi</div>
                        </div>
                        <ul>
                            <li> Gói quà tặng bao gồm :</li>
                            <li>Ba lô An Phát cho laptop (TUNB0097)</li>
                            <li>Chuột không dây AP2021(MUKH0061) hoặc Chuột không dây Konig KM919 (MUKM0021)</li>
                            <li> Túi chống sốc 14"(TUNB0007)</li>
                            <li>Ưu đãi mua kèm hấp dẫn</li>
                            <li>Ưu đãi giảm giá màn hình lên tới 1.000.000đ khi mua cùng màn hình: Danh sách màn hình xem tại đây</li>
                        </ul>
                    </div>
                    <div className="product__info--Insurance">
                            <h4>Bảo hành: 12 tháng, Đổi mới trong 15 ngày, Dịch vụ bảo hành tại nơi sử dụng của HP</h4>
                    </div>
                    <div className="product__info--Buy">
                            <button><b>Đặt Mua Ngay</b> <span>Nhanh Chóng, Thuận Tiện</span></button>
                    </div>
                    <div className="product__info--BuyCart">
                         <button  className="info__BuyCart--Installment" ><b>Mua Trả Góp</b> <span>Thủ tục đơn giản</span></button>
                         <button className="info__BuyCart--forCard"><b>Cho Vào Giỏ</b> <span>Mua tiếp sản phẩm khác</span></button>
                    </div>
                    <div className="product__info--AcceptPayment">
                       <span>Chấp Nhận Thanh Toán</span>
                       <img src={Payment}  />
                    </div>
                </div>
                <div  className="product__showroom">
                    <div className="product__showroom--one">
                            <h4>Hiện tại có các showroom </h4>
                    </div>
                    <div className="product__showroom--two">
                        <h4>Trợ giúp</h4>
                        <ul>
                            <li><CheckIcon /> <span> Hướng dẫn đặt hàng Flash Sale</span></li>
                            <li>  <CheckIcon /> <span>Hướng dẫn mua hàng</span></li>
                            <li>  <CheckIcon /> <span> Chính sách bảo hành đổi trả</span></li>
                            <li>  <CheckIcon /> <span> Chính sách mua trả góp</span></li>
                            <li>  <CheckIcon />  <span>Chính sách giao hàng</span></li>
                            <li>   <CheckIcon />  <span>Chính sách bảo hành tận nhà</span></li>
                            <li>  <CheckIcon />  <span>Hỗ trợ khách hàng dự án, doanh nghiệp</span></li>
                        </ul>
                    </div>
                    <div className="product__showroom--three">
                          <img src={Promotion} />
                    </div>
                </div>
            </div>

            <div  className="bg__white--detail">
    
            </div>
        </section>
    );
}

export default ProductDetail;