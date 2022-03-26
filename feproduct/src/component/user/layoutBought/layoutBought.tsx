import React from 'react';
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Footer from "../footer/footer";
import ProductBought from "../ProductBought/ProductBought";
import "../layoutUser/layoutUser.scss";

function LayoutCart() {
    return (
        <div  className="ContainerApp">
            <Navbar />
            <Announcement />
            <ProductBought />
            <Footer />
        </div>
    );
}

export default LayoutCart;
