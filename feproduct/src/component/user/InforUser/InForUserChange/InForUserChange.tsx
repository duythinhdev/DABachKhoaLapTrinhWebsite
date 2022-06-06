import React,{useEffect} from 'react';

export default function InForUserChange() {
    return (<div>
                <div><h1>Thông tin cá nhân</h1></div>
                <table  style={{border: "1px solid #000000",borderCollapse: "collapse", width:"100%" }} >
                    <tr className="p-3">
                        <td>
                            Họ tên
                        </td>
                        <td>
                            Đỗ Duy Thịnh
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Địa chỉ email
                        </td>
                        <td>
                            thinh.dockc@hcmut.edu.vn
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Địa chỉ nhà
                        </td>
                        <td>
                            Đỗ Duy Thịnh
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Tỉnh/TP
                        </td>
                        <td>
                            Đỗ Duy Thịnh
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Số điện thoại
                        </td>
                        <td>
                            Đỗ Duy Thịnh
                        </td>
                    </tr>
                    <tr className="p-3">
                        <td>
                            Số di động
                        </td>
                        <td>
                            Đỗ Duy Thịnh
                        </td>
                    </tr>
                    
                </table>
            </div>
    )
}