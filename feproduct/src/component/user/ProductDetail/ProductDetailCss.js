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
    display: flex;
    flex-direction: row;
`;
export const ItemDetailImage = styled.div`
    background: #F2582E;
    flex:0.4;
    display: flex;
    flex-direction: column;
`;
export const ItemDetailImageOne = styled.div`
    flex: 0.6;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const img = styled.img`
    width: 320px;  
    height: 100vh;
    ${laptop({ width: "320px",height: "auto"})}
`;
export const ItemDetailImageTwo = styled.div`
    background: black;
    flex:0.4;
`;
export const ItemDetailImagPrice = styled.div`
    display:flex;
    flex-direction: column;
    flex:0.6;
`;
export const ItemDetailImageTitle = styled.div`
    flex: 0.1;
    display: flex;
    justify-content: flex-start;
`;
export const ItemDetailImageTitlePrice = styled.div`
    flex: 0.05;
    display: flex;
    justify-content: flex-start;
`;
export const ItemDetailImageProduct = styled.div`
    background: white;
    flex: 0.4;
`;
export const ItemDetailImagebuttonBuy = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: center;
    align-item: center;
`;


export const ItemRecommand = styled.div`
    margin-top: 30px;
    width: 70%;
    height: 30vh;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;
export const ItemRecommandTitle = styled.div`
    flex: 0.1;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
`;
export const ItemRecommandProductDetail = styled.div`
    flex: 0.9;
    background: black;
    display: flex;
    flex-direction: row;
`;
export const ItemRecommandProductAll = styled.div`
    width: 70px;
    height: 150px;
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
    hh
    display: flex;
    flex-direction: column;
`;
export const ItemInformationTitle = styled.div`
    background: black;
    flex: 0.4;
    width: 100%;
    height: 10%;
`;
export const ItemInformationContent= styled.div`
    flex: 0.6;
    width: 100%;
    height: 90%;
    background: blue;
    display:flex;
    flex-direction: row;
`;
export const ItemInformationFrom= styled.div`
    flex: 0.4;
    background: black;
`;
export const ItemInformationFromDetail= styled.div`
    flex: 0.6;
    background: #61dafb;
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
    display:flex;
    flex-direction: column;
`;
export const ItemInforReviewTitle = styled.div`
    background: #black;
    flex:0.05;
`
export const ItemInforReviewContentStar = styled.div`
    background: #F2582E;
    flex:0.95;
    display:flex;
    flex-direction: row;
`
export const ItemInforReviewContentStarName = styled.div`
    background: black;
    flex:0.3;
`
export const ItemInforReviewContentStarContent = styled.div`
    background: #61da;
    flex:0.7;
`
