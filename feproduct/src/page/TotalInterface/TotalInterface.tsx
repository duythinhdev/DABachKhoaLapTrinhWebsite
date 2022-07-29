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
import {
  useParams
} from "react-router-dom";
import useSwitchComponent from "../../component/user/hook/useSwitchComponent";
interface ParamTypes {
  id: string | undefined
}
const TotalInterface = () =>  {
  let { id } = useParams<ParamTypes>();
  let { renderSwitch } = useSwitchComponent(id);
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