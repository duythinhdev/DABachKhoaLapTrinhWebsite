import React from 'react';
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Footer from "../../component/user/footer/footer";
import TopProduct from '../../component/user/TopProduct/TopProduct';
import Newsletter from "../../component/user/Newletter/Newletter";
// import "../LayoutUser/LayoutUser.scss
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";

const AllTopProduct = () => {
    return (
        <div className="ContainerApp">
            <Announcement />
            <Navbar />
            <TopProduct />
            <Newsletter />
            {/*<NewsFeeds />*/}
            <Footer />
        </div>
    );
}

export default AllTopProduct;