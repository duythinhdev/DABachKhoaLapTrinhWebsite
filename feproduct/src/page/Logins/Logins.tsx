import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import "./Logins.scss";
import Navbar from "../../component/user/Navbar/Navbar";
import Announcement from "../../component/user/Announcement/Announcement";
import Newsletter from "../../component/user/Newletter/Newletter";
import NewsFeeds from "../../component/user/NewsFeed/NewsFeed";
import Footer from "../../component/user/footer/footer";
import "../LayoutUser/LayoutUser.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import usePasswordToggle  from "./usePasswordToggle";
import Login from "../../component/user/login/login";
import Forgot from "../../component/user/Forgot/ForgotPassword";
import Register from "../../component/user/register/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

interface ParamTypes {
    id: string | undefined
}
const LoginUser = () => {
    let { id } = useParams<ParamTypes>();
    const renderSwitch = () => {
        switch(id) {
            case 'account':
                return  <Login />;
            case 'forgot':
                return  <Forgot />;
            case 'register':
                return  <Register />;
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
            {/*<NewsFeeds />*/}
            <Footer />
        </div>
    );
};

export default LoginUser;
