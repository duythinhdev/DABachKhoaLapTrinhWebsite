import React,{useEffect,useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ModalProductDetail from "../ModalProductdetail/ModalProductDetail";
import ImageProductDetail from "../ProductDetailImage";
import Payment from "../../../../asset/Capture123.png";
import CheckIcon from '@mui/icons-material/Check';
import Promotion from "../../../../asset/t3-2022-trang-sp-500x654.jpg";
import useSlideFetching from "../../hook/useSlideFetching";
import useColorTable from "../../hook/useColorTable";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../../enviroment/enviroment";
import useQueryLocation from "../../hook/useQueryLocation";
import { useDispatch } from 'react-redux';
import * as Action from "../../../../store/action/index";
import { Product,Options,Images} from "../../../../types/productType";
interface propsdata {
    item: Product,
    option: Options,
}
const ProductDetailsView:React.FC<propsdata> = ({item,option}) => {
    let totalNumberImage  = item.images?.length as number;
    let { slideIndex,nextSlide,prevSlide, 
        seeMore,isShowModal, 
        enableSeeMore, disableSeeMore,showModalPd, hideModalPd } = useSlideFetching(totalNumberImage);
    let { rowAlternateColors } =   useColorTable('tr');
    let dispatch = useDispatch();
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
                { item.images?.map((res:Images,index: number)=>{
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
                         <p> Ph??ng to H??nh s???n ph???m </p>
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
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>T??n s???n ph???m </td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>H??ng s???n xu???t</td> 
                            <td>Laptop Asus</td>
                        </tr>
                       
                    </tbody>
                </table>
                <a href="#" onClick={()=>showModalPd()}>Xem Th??ng S??? K??? Thu???t</a>
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
                        <span>5 ????nh gi??</span>
                    </div>
                    <div className="info__code--view">
                         <span>L?????t xem: 40.274</span>
                    </div>
                    <div className="info__code--compare">
                        <span> So s??nh</span>
                    </div>
                </div>
        </div>
        <div className="productinfo__detail">
              <b>{ option?.specifications?.replaceAll(" ",'\n')}</b>
            <div>{seeMore ? <span onClick={() =>disableSeeMore()}>Thu G???n</span> : <span onClick={() =>enableSeeMore()}> Xem Th??m</span>}</div>
        </div>
        <div className="productinfo__price">
                <div className="productinfo__price--Listedprice">
                    <h5>Gi?? ni??m y???t:</h5>
                    <b>  {option?.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </b>

                </div>
                <div className="productinfo__price--Promotionprice">
                    <h5>Gi?? khuy???n m???i:	</h5>
                    <b>{option?.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </b> <span>[Gi?? ???? c?? VAT]</span>
                </div>
        </div>
        <div className="productinfo__promotion">
            <div className="productinfo__promotion--title">
                <div>Khuy???n M??i</div>
            </div>
            <ul>
                <li> G??i qu?? t???ng bao g???m :</li>
                <li>Ba l?? An Ph??t cho laptop (TUNB0097)</li>
                <li>Chu???t kh??ng d??y AP2021(MUKH0061) ho???c Chu???t kh??ng d??y Konig KM919 (MUKM0021)</li>
                <li> T??i ch???ng s???c 14"(TUNB0007)</li>
                <li>??u ????i mua k??m h???p d???n</li>
                <li>??u ????i gi???m gi?? m??n h??nh l??n t???i 1.000.000?? khi mua c??ng m??n h??nh: Danh s??ch m??n h??nh xem t???i ????y</li>
            </ul>
        </div>
        <div className="productinfo__Insurance">
                <h4>B???o h??nh: 12 th??ng, ?????i m???i trong 15 ng??y, D???ch v??? b???o h??nh t???i n??i s??? d???ng c???a HP</h4>
        </div>
        <div className="productinfo__Buy">
                <button onClick={clickCart} ><b>?????t Mua Ngay</b> <span>Nhanh Ch??ng, Thu???n Ti???n</span></button>
        </div>
        <div className="productinfo__BuyCart">
             <button  className="productinfo__BuyCart--Installment" ><b>Mua Tr??? G??p</b> <span>Th??? t???c ????n gi???n</span></button>
             <button className="productinfo__BuyCart--forCard" onClick={clickCart} ><b>Cho V??o Gi???</b> <span>Mua ti???p s???n ph???m kh??c</span></button>
        </div>
        <div className="productinfo__AcceptPayment">
           <span>Ch???p Nh???n Thanh To??n</span>
           <img src={Payment}  />
        </div>
    </div>
    <div  className="product__showroom">
        <div className="product__showroom--one">
                <h4>Hi???n t???i c?? c??c showroom </h4>
        </div>
        <div className="product__showroom--two">
            <h4>Tr??? gi??p</h4>
            <ul>
                <li><CheckIcon /> <span> H?????ng d???n ?????t h??ng Flash Sale</span></li>
                <li>  <CheckIcon /> <span>H?????ng d???n mua h??ng</span></li>
                <li>  <CheckIcon /> <span> Ch??nh s??ch b???o h??nh ?????i tr???</span></li>
                <li>  <CheckIcon /> <span> Ch??nh s??ch mua tr??? g??p</span></li>
                <li>  <CheckIcon />  <span>Ch??nh s??ch giao h??ng</span></li>
                <li>   <CheckIcon />  <span>Ch??nh s??ch b???o h??nh t???n nh??</span></li>
                <li>  <CheckIcon />  <span>H??? tr??? kh??ch h??ng d??? ??n, doanh nghi???p</span></li>
            </ul>
        </div>
        <div className="product__showroom--three">
              <img src={Promotion} />
        </div>
    </div>
</div>
}

export default ProductDetailsView;