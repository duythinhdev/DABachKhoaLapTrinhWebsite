import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductBought from "../ProductBought/ProductBought";
import TopProduct from './TopProduct/TopProduct';
import Newsletter from "../Newletter/Newletter";
import "../../../page/layoutUser/layoutUser.scss";
import NewsFeeds from "../NewsFeed/NewsFeed";

const AllTopProduct = () => {
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <TopProduct />
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div>
    );
}

export default AllTopProduct;