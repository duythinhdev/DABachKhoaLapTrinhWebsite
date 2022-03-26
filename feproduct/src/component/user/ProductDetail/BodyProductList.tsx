import React from 'react';
import {TabName} from "./constants";
import ProductBrand from "./ProductBrand/ProductBand";

interface Props {
    tab: Object
}
const  BodyProductList:React.FC<Props> = ({tab}) => {
    switch (tab) {
        case TabName.ProductDetails.ProductSimilar:
            return <ProductBrand />;
        // case TabName.ProductDetails.ProductBrand:
        //     return <BodyHome/>;
        default: 
            <ProductBrand />;
            break;
    }
    return <></>;
}

export default BodyProductList;