import React,{useEffect} from 'react';
import "./InforUser.scss";
import useColorTable from "../hook/useColorTable";

export default function InforUser() {
    let { rowAlternateColors } =   useColorTable('dt');
    useEffect(() => {
        rowAlternateColors();
    },[])
  return (
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
                              <a>Danh Sách Đơn Hàng</a>
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
                              <a>Thông tin cá nhân</a>
                            </dd>
                            <dd>
                              <a>Thay đổi mật khẩu</a>
                            </dd>
                      </dl>
                      <dl>
                            <dt>Hoạt động cá nhân</dt>
                            <dd>
                              <a>Cấu hình của tôi</a>
                            </dd>
                            <dd>
                              <a>Logout</a>
                            </dd>
                      </dl>
                    </td>
                    <td id="account-right">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}
