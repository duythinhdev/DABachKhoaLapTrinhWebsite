import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { mobile,table } from "../response";
import "./Announcement.scss";

function Announcement() {
    return (
        <div className="ContainerAnnouncement">
            <div className="AnnouncementFlash">

            </div>
            <div className="Announcement"> 
                <span>Super Deal! Free Shipping on Orders Over $50</span>
            </div> 
            <div className="AnnouncementTab">
                <Link to="/user" className="link"  ><span className="span">Trang chủ</span></Link> &nbsp;
                <Link to="/news"  className="link"><span  className="span">Tin tức</span></Link> &nbsp;
                <Link to="/news"  className="link"><span  className="span">Slicder </span></Link> &nbsp;
                <Link to="/cart"  className="link"><span  className="span">Product Detail </span></Link> &nbsp;
                <Link to="/bought"  className="link"><span  className="span">Giỏ Hàng</span></Link> &nbsp;
            </div>
        </div>
    );
}

export default Announcement;
