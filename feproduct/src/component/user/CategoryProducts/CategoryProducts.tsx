import React,{useState, useEffect, useMemo} from 'react';
import "./CategoryProducts.scss";
import  HoverDetailProduct from "../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Link } from 'react-router-dom';
import { tsCategoryProduct,Product } from "../../../types/productType";
import useHoverProductDetail from "../hook/useHoverProductDetail";
import ListCategoryProducts from "../CategoryProducts/ListCategoryProducts/ListCategoryProducts";

interface props {
    indexs: number,
    response: tsCategoryProduct
}
const CategoryProducts: React.FC<props>  = React.memo(({ indexs,response }) =>  {
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
                            response?.product.map((res: Product,index: number)=> {
                            //   setConditionIndex(index);
                              return <ListCategoryProducts  moveDetail={(index: number)=>moveDetail(index)}
                                                            moveDetailOver={moveDetailOver} 
                                                            isHoverDetail={isHoverDetail} 
                                                            indexProductDetail={indexProductDetail}
                                                            index={index}
                                                            res={res}
                                                            />
                            })
                        }

                    </div>
                </div>
                {
                    response?.name === "TOP SA??N PH????M BA??N CHA??Y" ? <div className='box-center__seeMore'>
                        <Link to={`/system/topproduct?idctproduct=${response?._id}&nameCtProduct=${response?.name}`}  className="button__seemore" ><span>Xem t???t c??? s???n ph???m</span></Link>
                    </div> : 
                        <Link to={`/system/topproduct?idctproduct=${response?._id}&nameCtProduct=${response?.name}`}  className="button__seemore" ><a>Xem t???t c??? s???n ph???m </a></Link>
                }
            </div>
        </div>
    );
})

export default CategoryProducts;