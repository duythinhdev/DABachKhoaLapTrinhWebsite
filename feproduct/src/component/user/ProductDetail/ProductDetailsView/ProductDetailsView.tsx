import React,{useEffect,useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ModalProductDetail from "../ModalProductdetail/ModalProductDetail";
import ImageProductDetail from "../ProductDetailImage";
import Payment from "../../../../asset/Capture123.png";
import CheckIcon from '@mui/icons-material/Check';
import Promotion from "../../../../asset/t3-2022-trang-sp-500x654.jpg";
import useSlideFetching from "../../SliderProduct/useSlideFetching";

interface propsdata {
    dataDetail: Array<any>,
    ImageProductDetail:  Array<any>,
}
const ProductDetailsView:React.FC<propsdata> = ({dataDetail,ImageProductDetail}) => {
    let { slideIndex,setSlideIndex,nextSlide,prevSlide } = useSlideFetching(ImageProductDetail.length);
    const [seeMore,setSeeMore] = useState(false) as any | Boolean;
    const [showModalPD,setModalPD] = useState(false) as any | Boolean;
    const enableSeeMore = () => {
        setSeeMore(true)
    }
    const disableSeeMore = () => {
        setSeeMore(false)
    }
    const showModalPd = () => {
        setModalPD(true)
    }
    const hideModalPd = () => {
        setModalPD(false)
    }
    function rowAlternateColors() {
        var tr = document.getElementsByTagName('tr') as HTMLCollectionOf<HTMLElement>;

        for(let x = 0;x<tr.length;x++){
            if(x % 2 !== 0) 
            {
                tr[x].style.backgroundColor = '#edeef2';
            }
        }
    }
    
    useEffect(() => {
        rowAlternateColors();
    },[])
    return <div  className="bg__white">
    <div  className="productimage">
            <div  className="productimage__img">
                { ImageProductDetail.map((res,index)=>{
                    return <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={res} />;
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
                        <span>{slideIndex } / {ImageProductDetail.length}</span>
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
                    showModalPD && <ModalProductDetail showModalPD={showModalPD} hideModalPd={hideModalPd}  />
                }
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
}

export default ProductDetailsView;