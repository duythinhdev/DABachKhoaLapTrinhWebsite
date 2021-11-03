import React from 'react';
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItems from "../ProductsItem/ProductItems";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((res) => (
                <ProductItems item={res} key={res.id} />
            ))}
        </Container>
    );
};

export default Products;
