import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductDetail from "../ProductDetail/ProductDetail";
import Newsletter from "../Newletter/Newletter";
import "../../../page/layoutUser/layoutUser.scss";
import NewsFeeds from "../NewsFeed/NewsFeed";

function LayoutCart() {
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <ProductDetail />
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div>
    );
}

export default LayoutCart;
