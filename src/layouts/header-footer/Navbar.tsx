import { jwtDecode } from "jwt-decode";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

interface NavbarProps{
  tuKhoaTimKiem: string;
  setTuKhoaTimKiem: (tuKhoa: string) => void;
}

function Navbar({tuKhoaTimKiem, setTuKhoaTimKiem}: NavbarProps){
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setTuKhoaTimKiem(e.target.value);
  }
  const handleSearch= ()=>{
    setTuKhoaTimKiem(tuKhoaTimKiem);
  }
  const [username, setUsername] = useState<string | null> (null);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const userData = jwtDecode(token);
            console.log(userData);
            if(userData){
                setUsername(userData.sub+'');
            }
        }
},[]
);
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ic đây rồi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sản Phẩm
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="#">Thể loại 1</a></li>
                <li><a className="dropdown-item" href="#">Thể loại 2</a></li>
                <li><a className="dropdown-item" href="#">Thể loại 3</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Quy định
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a className="dropdown-item" href="#">Quy định 1</a></li>
                <li><a className="dropdown-item" href="#">Quy định 2</a></li>
                <li><a className="dropdown-item" href="#">Quy định 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
    

        <div className="d-flex">

          <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" onChange={onSearchInputChange} value={tuKhoaTimKiem} />
          <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
            <Search/>
          </button>
        </div>
    

        <ul className="navbar-nav me-1">
        <li className="nav-item">
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
            <ul className="navbar-nav me-1">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-user"></i>
            </a>
          </li>
          <NavLink className="nav-link active" aria-current="page" to="/dang-nhap">Đăng nhập</NavLink>
          <NavLink className="nav-link active" aria-current="page" to="/dangKy">Đăng Ký</NavLink>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;