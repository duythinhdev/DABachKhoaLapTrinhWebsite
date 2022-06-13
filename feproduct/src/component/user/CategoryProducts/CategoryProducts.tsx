import React,{useState, useEffect, useMemo} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';
import { tsCategoryProduct,Product } from "../../../types/productType";
import useHoverProductDetail from "../hook/useHoverProductDetail";

interface props {
    indexs: number,
    response: tsCategoryProduct
}
const CategoryProducts: React.FC<props>  = React.memo(({ indexs,response }) =>  {
    let [ conditionIndex,setConditionIndex] = useState(0) as number | undefined | any;
    let { isHoverDetail,indexProductDetail,moveDetail,moveDetailOver } = useHoverProductDetail();
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
                            response?.product.map((res: Product,index:number)=> {
                            //   setConditionIndex(index);
                              return  <div className='product--detail' >
                                        <div className='product--detail__img' >
                                            <img src={res?.images[0].url} onMouseOver={()=>moveDetail(index)} onMouseLeave={()=>moveDetailOver()} />
                                        </div>
                                        <div className='product--detail__Code'>
                                            <b> {res.options[0]?.code}</b>
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
                                        {
                                            isHoverDetail && indexProductDetail === index ? <HoverDetailProduct response={res} isCtProduct={true} /> : ''
                                        }
                                      </div>
                            })
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