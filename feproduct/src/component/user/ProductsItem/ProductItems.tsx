import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { enviroment } from "../../../enviroment/enviroment";
import React,{useState} from "react";
import axios, {AxiosResponse} from "axios";
import  * as Actions from "../../../store/action/index";
import {useDispatch} from "react-redux";

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

const Container = styled.div`
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
interface items{
    item:any
}
const ProductItems:React.FC<items> = ({ item }) => {
    let dispatch = useDispatch();
    const clickValueDetail = async (id:number) => {
        let action =  await  Actions.getDetailProduct(id);
        await dispatch(action);
    }
    return (
        <Container>
            <Circle />
            <Image src={enviroment.local + '/' + item.image} />
            <Info>
                    <Link to="/cart" onClick={()=>clickValueDetail(item.id)}>
                        <Icon>
                            <ShoppingCartOutlined />
                        </Icon>
                    </Link>
                    <Link to="/cart" onClick={()=>clickValueDetail(item.id)}>
                        <Icon>
                            <SearchOutlined />
                        </Icon>
                    </Link>
                    <Link to="/cart" onClick={()=>clickValueDetail(item.id)}>
                      <Icon>
                          <FavoriteBorderOutlined />
                      </Icon>
                    </Link>
            </Info>
        </Container>
    );
};

export default ProductItems;
