import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 30px;
`;
const span = styled.span `
    height: 30px;
    width:20px;
`;
function Announcement() {
    return (
        <Container>
            <Link to="/user" ><span>user</span></Link> &nbsp;
            <Link to="/news"><span>news</span></Link> &nbsp;
            <Link to="/news"><span>news</span></Link> &nbsp;
            <Link to="/cart"><span>carts</span></Link> &nbsp;
                Super Deal! Free Shipping on Orders Over $50
        </Container>
    );
}

export default Announcement;
