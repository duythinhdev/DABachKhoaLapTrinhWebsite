import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItems from "../ProductsItem/ProductItems";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

interface propProductCategory  {
    dataPagination?: any
}
const Products:React.FC<propProductCategory> = ({dataPagination}) => {
    return (
        <Container>
            {dataPagination?.map((res:any) => {
                return <div>
                    <h1>{res.name}</h1>
                    <ProductItems item={res} key={res.id} />
                </div>
            })}
        </Container>
    );
};

export default Products;

