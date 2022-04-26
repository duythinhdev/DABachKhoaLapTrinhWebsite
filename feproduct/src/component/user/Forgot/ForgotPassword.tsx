import React from 'react';
import "./ForgotPassword.scss"

const  ForgotPassword = () => {
  return (
    <div className="Container-ForgotPassword">
        <div className="itemForgot">
            <h1>Bạn quên mật khẩu vào tài khoản?</h1>           
        </div>
        <div>
        <p>Vui lòng nhập địa chỉ email đã đăng ký với chúng tôi để tạo mật khẩu mới. Chúng tôi sẽ gửi 1 email vào địa chỉ email cung cấp và yêu cầu xác minh trước khi có thể tạo mật khẩu mới</p>
        </div>
        <div className="itemEnterAddress">
          <span>Nhập địa chỉ email đăng ký</span>
          <form className="itemEnterAddress__formTakePassword">
             <input />
             <button>Lấy mật khẩu </button>
          </form>
        </div>
    </div>
  )
}
export default ForgotPassword;