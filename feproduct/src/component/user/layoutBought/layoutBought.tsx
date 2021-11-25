import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductBought from "../ProductBought/ProductBought";

function LayoutCart() {
    return (
        <>
            <Navbar />
            <Announcement />
            <ProductBought />
            <Footer />
        </>
    );
}

export default LayoutCart;
