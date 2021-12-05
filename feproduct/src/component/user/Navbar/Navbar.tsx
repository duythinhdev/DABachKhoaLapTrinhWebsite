import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile,table } from "../response";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  ${table({ height: "10%", width: "167%" })}
  ${mobile({ height: "50px", width: "100%",position: "relative" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
    outline:none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${table({ fontSize: "50px"})};
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    color: #FFFFFF;
    text-decoration: none;
  }
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${table({ fontSize: "32px"})};
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
    let token  = JSON.parse(localStorage.getItem('tokenUser') as any | string);
    let elementLogin = null;
    let elementLogout = null;
    let dispatch = useDispatch();
    let history  = useHistory();
    const logout = async () => {
        let action = actions.logoutUser();
        await  dispatch(action);
    }
    if(token)
    {
        elementLogin = <MenuItem onClick={logout}><Link to="/login"  > LOGOUT </Link></MenuItem>
    }
    else  {
        elementLogout = <MenuItem><Link to="/register" > REGISTER </Link></MenuItem>
        elementLogin  =  <MenuItem><Link to="/login" > SIGN IN </Link></MenuItem>
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TiKi</Logo>
                </Center>
                <Right>
                    {elementLogin}
                    {elementLogout}
                    <MenuItem>
                        <Badge badgeContent={50} color="primary">
                            <Link to="/bought" > <ShoppingCartOutlined /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
