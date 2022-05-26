import React,{useState, useEffect} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';
import TopProduct from "../../../asset/TopProduct/250_34178_large_7cafaa8dedb3d130.jpg";
import { enviroment } from "../../../enviroment/enviroment";
import axios, {AxiosResponse} from "axios";


export type  images = {
    _id: string,
    public_id: string,
    url:string
}
export type options = {
    _id:string,
    type: string,
    size: string,
    code: string,
    price: number,
    quantity: number,
    specifications: string,
}
export type product = {
    _id: string,
    Product_name: string,
    images: Array<images>,
    description: string,
    options: Array<options>,
    totalAmount: number,
    quantityCart: number,
}
type tsCategoryProduct = {
    updatedAt: string,
    createdAt: string,
    name: string,
    _id: string,
    product: Array<product>
} 
interface props {
    indexs: number,
    response: tsCategoryProduct
}
const CategoryProducts: React.FC<props>  = React.memo(({indexs,response}) =>  {
    const [hoverDetail,setHoverDetail] =  useState(false as boolean);
    const [isProductDetail,setIsProductDetail] = useState(1 as number);
    const moveDetail = async (index: number)   => {
      await  setHoverDetail(true);
      await  setIsProductDetail(index);
    }
    const moveDetailOver = () : void => {
        setHoverDetail(false);
    }
    return (
        <div className='p-container' key={indexs}>
            <div className='box-center'>
                <div className='box-center__title'>
                        <div className='box-center__title--ProductSpeed'>
                                    <h4 key={indexs}>{response?.name}</h4>
                        </div>
                </div>
    
                <div className='box-center__content'>
                    <div className='box-center__content--product'>
                        {
                            response?.product.map((res: product,index:number)=> {
                              return  <div className='product--detail' >
                                    <div className='product--detail__img' onMouseMove={()=>moveDetail(index)} onMouseLeave={()=>moveDetailOver()} >
                                        <img src={res?.images[0].url}/>
                                    </div>
                                <div className='product--detail__Code'>
                                    <span> {res._id}</span>
                                </div>
                                <div className='product--detail__Name'>
                                       <Link to={`/system/productdetail?idproduct=${res?._id}`}  className="detailName__link"><span>{res.Product_name}</span></Link> 
                                </div>
                                <div className='product--detail__pricePromotion'>
                                        <del>{res.options[0]?.price}</del>
                                </div>
                                <div className='product--detail__price'>
                                        {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} 
                                </div>
                                </div>
                            })
                        }
                        {
                            hoverDetail && isProductDetail  && <HoverDetailProduct />
                        }
                    </div>
                </div>
                {
                    response?.name === "TOP SẢN PHẨM BÁN CHẠY" ? <div className='box-center__seeMore'>
                        <Link to={`/system/topproduct?idctproduct=${response?._id}&nameCtProduct=${response?.name}`}  className="button__seemore" ><span>Xem tất cả sản phẩm</span></Link>
                    </div> : 
                        <Link to={`/system/topproduct?idctproduct=${response?._id}&nameCtProduct=${response?.name}`}  className="button__seemore" ><a>Xem tất cả sản phẩm </a></Link>
                }
            </div>
        </div>
    );
})

export default CategoryProducts;