import React from "react";
import {Link} from 'react-router-dom';
import "./Announcement.scss";

function Announcement() {
    return (
        <div className="ContainerAnnouncement row">
            <div className="AnnouncementFlash">

            </div>
            <div className="Announcement col-xs-12 col-md-6 col-lg-6 col-xl-6">
                <span>Super Deal! Free Shipping on Orders Over $50</span>
            </div>
            <div className="AnnouncementTab col-xs-12 col-md-6 col-lg-6 col-xl-6">
                <Link to="/user" className="link"><span className="span">Trang chủ</span></Link> &nbsp;
                <Link to="/news" className="link"><span className="span">Tin tức</span></Link> &nbsp;
                <Link to="/news" className="link"><span className="span">Slicder </span></Link> &nbsp;
                <Link to="/system/productdetail" className="link"><span
                    className="span">Product Detail </span></Link> &nbsp;
                <Link to="/system/cart" className="link"><span className="span">Giỏ Hàng</span></Link> &nbsp;
                <Link to="/system/topproduct" className="link"><span
                    className="span">Top Sản Phẩm</span></Link> &nbsp;
            </div>
        </div>
    );
}

export default Announcement;
