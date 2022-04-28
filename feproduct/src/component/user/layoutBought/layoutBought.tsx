import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductBought from "../ProductBought/ProductBought";
// import "../../../page/LayoutUser/layoutUser.scss";
import Newsletter from "../Newletter/Newletter";
import NewsFeeds from "../NewsFeed/NewsFeed";

function LayoutCart() {
    return (
        <div  className="ContainerApp">
            <Navbar />
            <Announcement />
            <ProductBought />
            <Newsletter />
            <NewsFeeds />
            <Footer />
        </div>
    );
}

export default LayoutCart;
