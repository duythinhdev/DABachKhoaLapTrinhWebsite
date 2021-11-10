import React from 'react';
import styled from "styled-components";
const Container = styled.div`
    width: 100%;
    height: 300vh;
    background: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
`;
const ItemDetail = styled.div`
    width: 70%;
    height: 100vh;
    background: #FFFFFF;
    
`;
function ProductDetail() {
    return (
        <Container>
            <ItemDetail> </ItemDetail>
        </Container>
    );
}

export default ProductDetail;
