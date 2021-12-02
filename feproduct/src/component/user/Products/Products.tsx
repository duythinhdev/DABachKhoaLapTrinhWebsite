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

const Products = () => {
    const [state, setState] = useState({
        page: 1 as any,
        rowsPerPage: 10 as any,
        dataPagination: [] as Array<any>,
    });
    let fetchDataProduct = async () => {
        let apiPagination = `v1/product/get?pagenumber=${state.page}&pagesize=${state.rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                console.log("res",res);
                setState({...state, dataPagination: res.data.response.data});
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProduct();
    }, [])
    return (
        <Container>
            {state.dataPagination?.map((res) => (
                <ProductItems item={res} key={res.id} />
            ))}
        </Container>
    );
};

export default Products;
