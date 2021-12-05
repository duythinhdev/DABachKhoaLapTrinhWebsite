import React from 'react';
import styled from "styled-components";
import {mobile, laptop,table} from "../response";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    ${table({ height: "100%",width: "167%" })}
    ${mobile({ height: "150vh",width: "100%" })}
`;
export const ItemInformationCart = styled.div`
    width: 80%;
    height: 100vh;
    background: #efefef;
    display: flex;
    flex-direction: row;
    ${mobile({ height: "100vh",width: "100%",position: "relative",top: "20px", display: "flex",flexdirection: "column" })}
`;
export const ItemInformation = styled.div`
        flex: 0.7;
        background: #efefef;
        display: flex;
        flex-direction: column;
        ${mobile({  display: "flex",flexdirection: "column" })}
`;
export const ItemInformationTitle = styled.div`
        flex:  0.05;
        width: 95%;
        margin-top: 100px;
        display:flex;
        justify-content: flex-start;
`;
export const ItemInformationOne = styled.div`
        flex: 0.05;
        background: #FFFFFF;
        margin-top: 10px;
        width: 95%;
        border-radius: 7px;
        display:flex;
        justify-content: space-between;
        align-items: center;
`;
export const ItemInformationTwo = styled.div`
        flex: 0.4;
        background: #FFFFFF;
        margin-top: 25px;
        width: 95%;
        border-radius: 7px;
`;
export const ItemInformationAddress = styled.div`
        flex: 0.3;
        background: #efefef;
        display:flex;
        flex-direction: column;
`;
export const ItemInformationAddressOne = styled.div`
        flex: 0.1;
        background: #FFFFFF;
        margin-top: 170px;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
`;
export const ItemInformationAddressOneEX = styled.div`
        flex: 0.3;
        border-radius: 7px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`;
export const ItemInformationAddressOneName = styled.div`
        flex: 0.3;
        border-radius: 7px;
        display: flex;
        flex-direction: row;
`;
export const ItemInformationAddressOneAD = styled.div`
        flex: 0.3;
        border-radius: 7px;
        display: flex;
        flex-direction: row;
`;
export const ItemInformationAddresstwo = styled.div`
        flex: 0.2;
        background: #FFFFFF;
        margin-top: 15px;
        border-radius: 7px;
`;
export const ItemInformationAddressButton = styled.button`
        flex: 0.05;
        margin-top: 15px;
        background: rgb(255, 66, 78);
        color: rgb(255, 255, 255);
        border-radius: 7px;
        border: none;
        cursor: pointer;
        ${laptop({
            width: "350px",
            height: "50px"
        })}
`;
const dataNameProduct = [
    {
        name: "Tất Cả(1 sản phẩm)"
    },
    {
        name: "Đơn giá"
    },
    {
        name: "Số lượng"
    },
    {
        name: "Thành tiền"
    },
]
const dataNameExpress = [
    {
        name: "Giao tới"
    },
    {
        name: "Đơn giá"
    },
    {
        name: "Số lượng"
    },
    {
        name: "Thành tiền"
    },
]

function ProductBought() {
    return (
        <Container>
            <ItemInformationCart>
                <ItemInformation>
                    <ItemInformationTitle>
                        <h3>Giỏ Hàng</h3>
                    </ItemInformationTitle>
                    <ItemInformationOne>
                        {
                            dataNameProduct.map((res: any, index: number) => {
                                return <span key={index}>{res.name}</span>
                            })
                        }
                    </ItemInformationOne>
                    <ItemInformationTwo>

                    </ItemInformationTwo>
                </ItemInformation>
                <ItemInformationAddress>
                    <ItemInformationAddressOne>
                        <ItemInformationAddressOneEX>
                                <span>
                                    Giao Tới
                                </span>
                            <span>
                                    Thay Đổi
                                </span>
                        </ItemInformationAddressOneEX>
                        <ItemInformationAddressOneName>
                                <span>
                                   Đỗ Duy Thịnh
                                </span>
                            <span>
                                    0392349083
                                </span>
                        </ItemInformationAddressOneName>
                        <ItemInformationAddressOneAD>
                                <span>
                                   60 102 Cao lỗ Quận 8, Phường 04, Quận 8, Hồ Chí Minh
                                </span>
                        </ItemInformationAddressOneAD>
                    </ItemInformationAddressOne>
                    <ItemInformationAddresstwo>
                    </ItemInformationAddresstwo>
                    <ItemInformationAddressButton>
                        <span>Mua Hàng</span>
                    </ItemInformationAddressButton>
                </ItemInformationAddress>
            </ItemInformationCart>
        </Container>
    );
}

export default ProductBought;
