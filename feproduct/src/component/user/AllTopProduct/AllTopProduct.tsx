import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductBought from "../ProductBought/ProductBought";
import TopProduct from './TopProduct/TopProduct';
import Newsletter from "../Newletter/Newletter";

const AllTopProduct = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <TopProduct />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default AllTopProduct;