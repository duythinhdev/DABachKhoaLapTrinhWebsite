import React,{useEffect,useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ModalProductDetail from "../ModalProductdetail/ModalProductDetail";
import ImageProductDetail from "../ProductDetailImage";
import Payment from "../../../../asset/Capture123.png";
import CheckIcon from '@mui/icons-material/Check';
import Promotion from "../../../../asset/t3-2022-trang-sp-500x654.jpg";
import useSlideFetching from "../../SliderProduct/useSlideFetching";
import useColorTable from "../../hook/useColorTable";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../../enviroment/enviroment";
import useQueryLocation from "../../hook/useQueryLocation";
import { useDispatch } from 'react-redux';
import * as Action from "../../../../store/action/index";

interface propsdata {
    dataDetail: Array<any>,
    item: any,
    option: any,
}
const ProductDetailsView:React.FC<propsdata> = ({dataDetail,item,option}) => {
    let { slideIndex,setSlideIndex,nextSlide,prevSlide } = useSlideFetching(item.images?.length);
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;
    const [isShowModal,setIsShowModal] = useState(false) as any | Boolean;
    let dispatch = useDispatch();
    const enableSeeMore = () => {
        setSeeMore(true)
    }
    const disableSeeMore = () => {
        setSeeMore(false)
    }
    const showModalPd = () => {
        setIsShowModal(true)
    }
    const hideModalPd = () => {
        setIsShowModal(false)
    }
    let { rowAlternateColors } =   useColorTable('tr');
    useEffect(() => {
        rowAlternateColors();
    },[])
    const clickCart =  () => {
        let action = Action.addCartUser(item);
        dispatch(action);
    }
    return <div  className="bg__white">
    <div  className="productimage">
            <div  className="productimage__img">
                { item.images?.map((res:any,index: number)=>{
                    console.log("slideIndex",slideIndex);
                    console.log("index",index);
                    return <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={res.url} />;
                    </div>
                })}
                <button className="btn-slide btn-slide--next" onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </button>
                <button className="btn-slide btn-slide--prev" onClick={prevSlide}>
                    <ArrowBackIosNewIcon />
                </button>
            </div>
            <div  className="productimage__zoom">
                <div className="productzoom__title">
                    <div className="productzoom__title--zoomTo">
                         <p> Phóng to Hình sản phẩm </p>
                    </div>
                    <div className="productzoom__title--sum">
                        <span>{slideIndex} / {item.images?.length}</span>
                    </div>
                    
                </div>
                <div className="productzoom__two">

                </div>
            </div>
            <div  className="productimage__detail">
                <table >
                    <tbody>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Tên sản phẩm </td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                       
                    </tbody>
                </table>
                <a href="#" onClick={()=>showModalPd()}>Xem Thông Số Kỹ Thuật</a>
                {
                    isShowModal && <ModalProductDetail showModalPD={isShowModal} hideModalPd={hideModalPd}  />
                }
            </div>
    </div>
    <div  className="productinfo">
        <div  className="productinfo__title">
                <div className="productinfo__title--name"> 
                    <b>{item.Product_name}</b>
                </div>
                <div className="productinfo__title--code"> 
                    <div className="info__code--name">
                        <b>{option?.code}</b>
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
              <b>{ option?.specifications?.replaceAll(" ",'\n')}</b>
            <div>{seeMore ? <span onClick={() =>disableSeeMore()}>Thu Gọn</span> : <span onClick={() =>enableSeeMore()}> Xem Thêm</span>}</div>
        </div>
        <div className="productinfo__price">
                <div className="productinfo__price--Listedprice">
                    <h5>Giá niêm yết:</h5>
                    <b>  {option?.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </b>

                </div>
                <div className="productinfo__price--Promotionprice">
                    <h5>Giá khuyến mại:	</h5>
                    <b>{option?.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </b> <span>[Giá đã có VAT]</span>
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
                <button onClick={clickCart} ><b>Đặt Mua Ngay</b> <span>Nhanh Chóng, Thuận Tiện</span></button>
        </div>
        <div className="productinfo__BuyCart">
             <button  className="productinfo__BuyCart--Installment" ><b>Mua Trả Góp</b> <span>Thủ tục đơn giản</span></button>
             <button className="productinfo__BuyCart--forCard" onClick={clickCart} ><b>Cho Vào Giỏ</b> <span>Mua tiếp sản phẩm khác</span></button>
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
}

export default ProductDetailsView;