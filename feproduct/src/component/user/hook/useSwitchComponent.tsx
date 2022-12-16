import InForUserChange from "../InforUser/InForUserChange/InForUserChange";
import InForUserChangePassword from "../InforUser/InForUserChangePassword/InForUserChangePassword";
import ListProductBouth from "../InforUser/ListProductBougth/ListProductBouth";
import Login from "../login/login";
import Forgot from "../../../component/user/Forgot/ForgotPassword";
import TopProduct from "../../../component/user/TopProduct/TopProduct";
import ProductDetail from "../../../component/user/ProductDetail/ProductDetail";
import Cart from "../../../component/user/ProductBought/ProductBought";
import NewsDetail from "../../../component/user/NewsDetail/NewsDetail";
import Register from "../Registers/Register";
import { useHistory } from "react-router-dom";
import { token } from "../../../store/selector/loginsSelector";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function useSwitchComponent(id: string | undefined) {
  const history = useHistory();
  const tokens = useSelector(token);
  const renderSwitch = () => {
    switch(id) {
      case 'inforperson':
        return  <InForUserChange />;
      case 'list':
        return  <ListProductBouth />;
      case 'changepassword':
        return  <InForUserChangePassword />;
      case 'account':
        if(!_.isEmpty(tokens))
          history.push("/user")
        return <Login />;
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
      case 'newsdetail':
        return  <NewsDetail />;
      }
    }
  return { renderSwitch }
}