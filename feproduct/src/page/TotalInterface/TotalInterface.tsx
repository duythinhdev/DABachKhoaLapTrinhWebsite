import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";
import Footer from "../../component/user/footer/footer";
import "../LayoutUser/LayoutUser.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import usePasswordToggle  from "./usePasswordToggle";
import Login from "../../component/user/Login/Login";
import Forgot from "../../component/user/Forgot/ForgotPassword";
import Register from "../../component/user/Register/Register";
import TopProduct from "../../component/user/TopProduct/TopProduct";
import ProductDetail from "../../component/user/ProductDetail/ProductDetail";
import Cart from "../../component/user/ProductBought/ProductBought";
import InforUser from "../../component/user/InforUser/InforUser";
import {
  useParams
} from "react-router-dom";
interface ParamTypes {
  id: string | undefined
}
const TotalInterface = () =>  {
  let { id } = useParams<ParamTypes>();
  const renderSwitch = () => {
      switch(id) {
          case 'account':
              return  <Login />;
          case 'forgot':
              return  <Forgot />;
          case 'register':
              return  <Register />;
          case 'topproduct':
              return  <TopProduct />;
          case 'productdetail':
              return  <ProductDetail />;
          case 'cart':
              return  <Cart />;
          case 'informationuser':
              return  <InforUser />;
      }
    }
  useEffect(()=> {
      renderSwitch();
  },[id])
  return (
      <div className="ContainerApp">
          <Announcement />
          <Navbar />
          {renderSwitch()}
          <Newsletter />
          <NewsFeeds />
          <Footer />
      </div>
  );
}
export default TotalInterface;