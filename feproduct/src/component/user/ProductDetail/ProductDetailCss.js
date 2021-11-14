import styled from "styled-components";
import { mobile,laptop } from "../response";
export const Container = styled.div`
    width: 100%;
    height: 300vh;
    background: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
`;
export const ItemDetail = styled.div`
    width: 70%;
    height: 100vh;
    background: #FFFFFF;
    
`;
export const ItemRecommand = styled.div`
    margin-top: 30px;
    width: 70%;
    height: 30vh;
    background: #FFFFFF;
    
`;
export const ItemInAll = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    
`;
export const ItemInformation = styled.div`
    margin-top: 30px;
    width: 50%;
    height: 60vh;
    background: #FFFFFF;
    margin-left: 285px;
    ${laptop({ marginleft: "200px"})}
`;
export const ItemInforDetail = styled.div`
    margin-top: 30px;
    margin-left: 285px;
    width: 50%;
    height: 60vh;
    background: #FFFFFF;
    ${laptop({ marginleft: "200px"})}
    
`;
export const ItemInforReview = styled.div`
    margin-top: 30px;
    width: 70%;
    height: 100vh;
    background: #FFFFFF;
`;
