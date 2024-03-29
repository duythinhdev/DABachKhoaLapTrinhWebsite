import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import {mobile, table} from "../response";
import axios, {AxiosResponse} from "axios";
import {enviroment} from "../../../enviroment/enviroment";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${table({height: "100%", width: "160%"})}
  ${mobile({height: "100%", width: "160%", padding: "0px", flexDirection: "column"})}

`;

interface propCategory {

}

const Categories: React.FC<propCategory> = () => {
    const [state, setState] = useState({
        page: 1 as any,
        rowsPerPage: 10 as any,
        dataPagination: [] as Array<any>,
    });

    let fetchDataProduct = async () => {
        let apiPagination = `v1/product/get?pagenumber=${state.page}&pagesize=${state.rowsPerPage}`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                setState({...state, dataPagination: res.data.response.data});
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProduct();
    }, [])
    return (
        <Container>
            {state.dataPagination?.map((item) => (
                <CategoryItem item={item} key={item?.id}/>
            ))}
        </Container>
    );
};

export default Categories;
