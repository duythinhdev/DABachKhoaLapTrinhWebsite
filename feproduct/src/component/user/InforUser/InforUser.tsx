import React,{useEffect} from 'react';
import "./InforUser.scss";
import useColorTable from "../hook/useColorTable";
import * as actions from "../../../store/action";
import {useDispatch} from "react-redux";
import { useHistory,Link,useParams } from 'react-router-dom';

import InForUserChange from "../InforUser/InForUserChange/InForUserChange";
import InForUserChangePassword from "../InforUser/InForUserChangePassword/InForUserChangePassword";
import Announcement from "../../../component/user/Announcement/Announcement";
import Newsletter from "../../../component/user/Newletter/Newletter";
import NewsFeeds from "../../../component/user/NewsFeed/NewsFeed";
import Footer from "../../../component/user/footer/footer";
import Navbar from "../../../component/user/Navbar/Navbar";
import "../../../page/LayoutUser/LayoutUser.scss";
import ListProductBouth from "../InforUser/ListProductBougth/ListProductBouth";
import useSwitchComponent from "../../../component/user/hook/useSwitchComponent";
interface ParamTypes {
  id: string | undefined
}

export default function InforUser() {

    let { id } = useParams<ParamTypes>();
    let { rowAlternateColors } =   useColorTable('dt');
    let { renderSwitch } = useSwitchComponent(id);
    useEffect(() => {
        rowAlternateColors();
        renderSwitch();
    },[id])
    let dispatch = useDispatch();
    const logout = async () => {
      let action = actions.logoutUser();
      await dispatch(action);
    }
  return (
    <div className="ContainerApp">
      <Announcement />
      <Navbar />
      <div className="Cointainer-information">
          <div className="Wrapper">
              <div className="itemNav">

              </div>
              <div className="itemcontent">
                <table>
                  <tbody>
                    <tr>
                      <td id="account-left">
                        <dl>
                              <dt>Đơn Đặt Hàng Mua</dt>
                              <dd>
                                <Link to="/informationuser/list">Danh Sách Đơn Hàng</Link>
                              </dd>
                        </dl>
                        <dl>
                                <dt>Hoạt động cá nhân</dt>
                                <dd>
                                  <a>Sản phẩm đang lưu</a>
                                </dd>
                        </dl>
                        <dl>
                              <dt>Thông tin tài khoản</dt>
                              <dd>
                                <Link to="/informationuser/inforperson">Thông tin cá nhân</Link>
                              </dd>
                              <dd>
                              <Link to="/informationuser/changepassword">Thay đổi mật khẩu</Link>
                              </dd>
                        </dl>
                        <dl>
                              <dt>Hoạt động cá nhân</dt>
                              <dd>
                                <a>Cấu hình của tôi</a>
                              </dd>
                              <dd onClick={logout}>
                                Logout 
                              </dd>
                        </dl>
                      </td>
                      <td id="account-right">
                        {
                             renderSwitch()
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
      <Newsletter />
      <NewsFeeds />
      <Footer />
    </div>
  )
}
