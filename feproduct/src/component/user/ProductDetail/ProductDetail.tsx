import React from 'react';
import "../ProductDetail/ProductDetail.scss";
// import { motion } from  'framer-motion/dist/framer-motion'
import { useRef, useEffect, useState } from "react";
import images from "./images";
import Payment from "../../../asset/Capture123.png";
import CheckIcon from '@mui/icons-material/Check';
import Promotion from "../../../asset/t3-2022-trang-sp-500x654.jpg";
import image from "../../../asset/newsoffer/120_7828_dell_ultrasharp_u2422h_thumb4.jpg";
import Noavatar from "../../../asset/newsoffer/noavatar.jpg";


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

    const clickShowMore  = (event:  React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSeeMore(!seeMore);    
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
                <div  className="productinfo">
                    <div  className="productinfo__title">
                            <div className="productinfo__title--name"> 
                                <span>Màn hình máy tính Acer VG270 UM.HV0SS.001 27'' Full HD 75Hz Gaming</span>
                            </div>
                            <div className="productinfo__title--code"> 
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
                    <div className="productinfo__detail">
                        {
                            dataDetail.map((res: any,index: number) =>{
                                    return <span key={index}>{ index > 3 && seeMore ?  res.detail :  res.detail}</span>
                            })
                        }
                        <div>{seeMore ? <span onClick={() =>disableSeeMore()}>Thu Gọn</span> : <span onClick={() =>enableSeeMore()}> Xem Thêm</span>}</div>
                    </div>
                    <div className="productinfo__price">
                            <div className="productinfo__price--Listedprice">
                                <h5>Giá niêm yết:</h5>
                                <span>23.990.000 đ</span>
       
                            </div>
                            <div className="productinfo__price--Promotionprice">
                                <h5>Giá khuyến mại:	</h5>
                                <b>20.690.000 đ</b> <span>[Giá đã có VAT]</span>
                            </div>
                    </div>
                    <div className="productinfo__promotion">
                        <div className="productinfo__promotion--title">
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
                    <div className="productinfo__Insurance">
                            <h4>Bảo hành: 12 tháng, Đổi mới trong 15 ngày, Dịch vụ bảo hành tại nơi sử dụng của HP</h4>
                    </div>
                    <div className="productinfo__Buy">
                            <button><b>Đặt Mua Ngay</b> <span>Nhanh Chóng, Thuận Tiện</span></button>
                    </div>
                    <div className="productinfo__BuyCart">
                         <button  className="productinfo__BuyCart--Installment" ><b>Mua Trả Góp</b> <span>Thủ tục đơn giản</span></button>
                         <button className="productinfo__BuyCart--forCard"><b>Cho Vào Giỏ</b> <span>Mua tiếp sản phẩm khác</span></button>
                    </div>
                    <div className="productinfo__AcceptPayment">
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
                </div>
        </section>
    );
}

export default ProductDetail;