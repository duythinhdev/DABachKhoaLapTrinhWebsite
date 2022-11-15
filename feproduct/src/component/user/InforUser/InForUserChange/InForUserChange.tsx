import React from 'react';
import { useSelector,RootStateOrAny } from 'react-redux';
export default function InForUserChange() {
    let { currentUser } = useSelector((state: RootStateOrAny) => state.login); 
    return (<div>
                <div><h1>Thông tin cá nhân</h1></div>
                <table  style={{border: "1px solid #000000",borderCollapse: "collapse", width:"100%" }} >
                    <tr className="p-3">
                        <td>
                            Họ tên
                        </td>
                        <td>
                           {currentUser?.full_name}
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Địa chỉ email
                        </td>
                        <td>
                            {currentUser?.email}
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Địa chỉ nhà
                        </td>
                        <td>
                            {currentUser?.address}
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Tỉnh/TP
                        </td>
                        <td>
                            {currentUser?.city}
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Số điện thoại
                        </td>
                        <td>
                            {currentUser?.phone_number}
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Số di động
                        </td>
                        <td>
                            {currentUser?.permission === 0 ? "admin": "user"}
                        </td>
                    </tr>
                    
                </table>
            </div>
    )
}