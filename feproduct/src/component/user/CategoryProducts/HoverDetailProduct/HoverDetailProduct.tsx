import React from 'react'
import "./HoverDetailProduct.scss";
import {Product} from "../../../../types/productType";

interface props {
    response: Product,
    isCtProduct: Boolean
}

const HoverDetailProduct: React.FC<props> = ({response, isCtProduct}) => {
    return (
        <div className="cointainer__productDetail"
             style={{left: isCtProduct ? "100px" : "", marginLeft: !isCtProduct ? "70px" : ""}}>
            <div className="productDetail__name">
                <span>{response.Product_name}</span>
            </div>
            <div className="productDetail__specifications">
                <span>{response.options[0]?.specifications}</span>
            </div>
            <div className="productDetail__quantity">
                <span>{response.options[0]?.quantity}</span>
            </div>
            <div className="productDetail__price">
                <span>{response.options[0]?.price}</span>
            </div>
        </div>
    )
}

export default HoverDetailProduct;
