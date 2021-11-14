import React from 'react';
import { Container,ItemDetail,ItemRecommand,ItemInAll,ItemInformation,ItemInforDetail,ItemInforReview } from '../ProductDetail/ProductDetailCss';
function ProductDetail() {
    return (
        <Container>
            <ItemDetail> </ItemDetail>
            <ItemRecommand> </ItemRecommand>
            <ItemInAll>
                <ItemInformation> </ItemInformation>
                <ItemInforDetail> </ItemInforDetail>
            </ItemInAll>
            <ItemInforReview> </ItemInforReview>
        </Container>
    );
}

export default ProductDetail;
