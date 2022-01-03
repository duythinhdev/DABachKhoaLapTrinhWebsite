import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { mobile,table } from "../response";
import "./Announcement.scss";

// const Container = styled.div`
//   height: 30px;
//   background-color: teal;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   font-weight: 500;
//   ${table({ height: "15%",width: "167%" })}
//   ${mobile({ height: "50px",width: "100%",position:"relative",top: "20px" })}
// `;
// const span = styled.span`
//     height: 30px;
//     width:20px;
// `;
function Announcement() {
    return (
        <div className="Container">
            <Link to="/user" ><span className="span">user</span></Link> &nbsp;
            <Link to="/news"><span  className="span">news</span></Link> &nbsp;
            <Link to="/news"><span  className="span">news</span></Link> &nbsp;
            <Link to="/cart"><span  className="span">carts</span></Link> &nbsp;
            <Link to="/bought"><span  className="span">carts</span></Link> &nbsp;
                Super Deal! Free Shipping on Orders Over $50
        </div>
    );
}

export default Announcement;
