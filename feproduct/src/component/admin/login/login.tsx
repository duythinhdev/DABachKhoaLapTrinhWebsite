import React from 'react';
import "./login.scss";

const Login = ()  => {

    return (
        <div className="backgroundLogin">
            <form className="formlogin">
                    <div style={{color: "black"}}>
                        <h3>Login Admin</h3>
                    </div>
                    <div className="formlogin__username">
                        <input placeholder="Tên Tài Khoản" name="username"  />
                    </div>
                    <div className="formlogin__password">
                        <input  placeholder="Mật Khẩu"  name="password" />
                    </div>
                    <div className="formlogin__submit">
                        <button>Đăng Nhập</button>
                    </div>
            </form>
        </div>
    );
}

export default Login;
