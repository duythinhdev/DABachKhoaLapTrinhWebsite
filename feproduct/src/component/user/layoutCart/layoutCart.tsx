import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductDetail from "../ProductDetail/ProductDetail";

function LayoutCart() {
    return (
        <>
            <Navbar />
            <Announcement />
            <ProductDetail />
            <Footer />
        </>
    );
}

export default LayoutCart;
