import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Slider from "../slider/slider";
import Products from "../Products/Products";
import Newsletter from "../Newletter/Newletter";
import Footer from "../footer/footer";
import ProductDetail from "../ProductDetail/ProductDetail";

function LayoutCart() {
    return (
        <>
            <Navbar />
            <Announcement />
            <ProductDetail />
            <ProductDetail />
            <Footer />
        </>
    );
}

export default LayoutCart;
