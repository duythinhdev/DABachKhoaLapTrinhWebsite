import React from 'react';
import {Link} from "react-router-dom";
import HoverDetailProduct from "../../CategoryProducts/HoverDetailProduct/HoverDetailProduct";

interface props {
    res?: any,
    index?: number,
    moveDetail: () => void;
    isHoverDetail?: boolean;
    indexProductDetail?: number;
    moveDetailOver: () => void;
}
function ItemTopProduct({res,index,moveDetail,isHoverDetail,indexProductDetail,moveDetailOver}: props) {
    return (
        <div className='product__item' key={index} >
            <div className='product__item--img'>
                <img src={res.images[0].url} onMouseOver={moveDetail} onMouseLeave={moveDetailOver} />
            </div>
            <div className='product__item--code'>
                {res._id}
            </div>
            <div className='product__item--name'>
                <Link className='linknameProduct'
                      to={`/system/productdetail?idproduct=${res?._id}`}>
                    {res.Product_name}
                </Link>
            </div>
            <div className='product__item--pricemotion'>
                {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </div>
            <div className='product__item--price'>
                {res.options[0]?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </div>
            <div className='product__item--motion'>
                <span>1 Khuyến Mãi</span>
            </div>
            <div className='product__item--compare'>
                <span>So Sanh</span>
            </div>
            {
                isHoverDetail && indexProductDetail === index ? <HoverDetailProduct response={res} isCtProduct={false} /> : ''
            }
        </div>
    );
}

export default ItemTopProduct;