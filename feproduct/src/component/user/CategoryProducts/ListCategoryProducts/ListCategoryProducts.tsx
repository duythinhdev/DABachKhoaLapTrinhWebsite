import React from 'react';
import  HoverDetailProduct from "../../CategoryProducts/HoverDetailProduct/HoverDetailProduct";
import { Product,propsListCategoryProduct } from "../../../../types/productType";
import { Link } from 'react-router-dom';

const ListCategoryProducts: React.FC<propsListCategoryProduct> = React.memo(({res,isHoverDetail,indexProductDetail,index,moveDetail,moveDetailOver}) => {
        return <div className='product--detail' >
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

export default ListCategoryProducts;