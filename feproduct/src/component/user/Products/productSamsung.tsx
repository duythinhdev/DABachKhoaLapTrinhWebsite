import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItemsSamsung from "../ProductsItem/ProductItemSamSung";
import axios, {AxiosResponse} from "axios";
import { enviroment } from "../../../enviroment/enviroment";
import {useDispatch} from "react-redux";
import  * as Actions from "../../../store/action/index";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ContainerItem = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
interface propProductCategory  {
}
const ProductsSamSung:React.FC<propProductCategory> = ({}) => {
    const [state, setState] = useState({
        page: 1 as any,
        rowsPerPage: 10 as any,
        dataPagination: [] as Array<any>,
        dataPaginationSamsung: [] as Array<any>
    });
    let fetchDataProductSamSung = async () => {
        let apiPagination = `v1/categoryproduct/getaboutproduct?pagenumber=${state.page}&pagesize=${state.rowsPerPage}&idcategory=2`;
        await axios.get(enviroment.local + apiPagination)
            .then((res: AxiosResponse<any>) => {
                console.log(res);
                setState({...state, dataPaginationSamsung: res.data.response.data});
            }).catch(err => console.log(err));
    }
    let dispatch = useDispatch();
    const clickValueDetail = async (id:number) => {
        let action =  await Actions.getDetailProduct(id);
        await dispatch(action);
    }
    useEffect(()=>{
        fetchDataProductSamSung();
    },[])
    return (
        <>
           <h1>Danh Mục sản phẩm Sam Sung</h1>
            <Container> 
                {state.dataPaginationSamsung?.map((res:any) => (
                               <ContainerItem>
                               <Circle />
                               <Image src={enviroment.local + '/' + res.image} />
                               <Info>
                                       <Link to="/cart" onClick={()=>clickValueDetail(res.id)}>
                                           <Icon>
                                               <ShoppingCartOutlined />
                                           </Icon>
                                       </Link>
                                       <Link to="/cart" onClick={()=>clickValueDetail(res.id)}>
                                           <Icon>
                                               <SearchOutlined />
                                           </Icon>
                                       </Link>
                                       <Link to="/cart" onClick={()=>clickValueDetail(res.id)}>
                                         <Icon>
                                             <FavoriteBorderOutlined />
                                         </Icon>
                                       </Link>
                               </Info>
                           </ContainerItem>
                ))}
            </Container>
       </>
    );
};

export default ProductsSamSung;

