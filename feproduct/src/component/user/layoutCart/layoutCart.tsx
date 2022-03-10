import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductDetail from "../ProductDetail/ProductDetail";

function LayoutCart() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <ProductDetail />
            <Footer />
        </div>
    );
}

export default LayoutCart;
