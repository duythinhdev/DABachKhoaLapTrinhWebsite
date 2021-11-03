import React from 'react';
import "./layoutUser.scss";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Slider from "../slider/slider";
import Categories from "../categories/categories";
import Products from "../Products/Products";
import Newsletter from "../Newletter/Newletter";
import Footer from "../footer/footer";

function LayoutUser() {
    return (
        <>
            <Navbar />
            <Announcement />
            <Categories />
            <Products  />
            <Newsletter />
            <Footer />
        </>
    );
}

export default LayoutUser;
