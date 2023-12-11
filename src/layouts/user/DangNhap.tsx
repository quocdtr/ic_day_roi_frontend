import React, { useState } from 'react';
const DangNhap=()=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    const loginRequest = {
        username: username,
        password: password
    };

    fetch('http://localhost:8080/tai-khoan/dang-nhap',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginRequest)
        }
    ).then(
        (response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Đăng nhập thất bại!')
            }
        }
    ).then(
        (data) => {
            // Xử lý đăng nhập thành công
            const { jwt } = data;
            // Lưu token vào localStorage hoặc cookie
            localStorage.setItem('token', jwt);
            // Điều hướng đến trang chính hoặc thực hiện các tác vụ sau đăng nhập thành công
            setError('Đăng nhập thành công!');
        }
    ).catch((error) => {
        // Xử lý lỗi đăng nhập
        console.error('Đăng nhập thất bại: ', error);
        setError('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
    )
}
  return (
 <div className="container">
       <div className="d-flex justify-content-center">  
        
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="loginName">Tên đăng nhập</label>
        <input type="text" id="username" className="form-control" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
      </div>


      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="loginPassword">Mật khẩu</label>
        <input type="password" id="password" className="form-control" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </div>


      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">

          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">

          <a href="#!">Forgot password?</a>
        </div>
      </div>


      <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Đăng nhập</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div className="text-center">
        <p>Not a member? <a href="http://localhost:3000/dangKy">đăng ký</a></p>
      </div>
    </form>
  </div>
  </div>
</div>
</div>
    );
}
export default DangNhap;