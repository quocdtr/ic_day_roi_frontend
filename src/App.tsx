import React, { useState } from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import HomePage from './layouts/homepage/HomePage';
import { layToanBoSanPham } from './api/SanPhamAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChiTietSanPham from './layouts/product/ChiTietSanPham';
import DangKyNguoiDung from './layouts/user/DangKyNguoiDung';
import KichHoatTaiKhoan from './layouts/user/KichHoatTaiKhoan';
import DangNhap from './layouts/user/DangNhap';
import SanPhamForm from './layouts/admin/SanPhamForm';
import SanPhamForm_Admin from './layouts/admin/SanPhamForm';
import Test from './layouts/user/Test';


function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState('');

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem}/>
      <Routes>
      <Route path='/' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem}  />}/>
      <Route path='/:maTheLoai' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem}  />}/>
      <Route path='/san-pham/:maSanPham' element={<ChiTietSanPham />} />
      <Route path='/dangKy' element={<DangKyNguoiDung />} />
      <Route path='/kich-hoat/:email/:maKichHoat' element={<KichHoatTaiKhoan/>} />
      <Route path='/dang-nhap' element={<DangNhap/>} />
      <Route path='/admin/SanPhamFrom' element={<SanPhamForm_Admin/>} />
      <Route path='/test' element={<Test/>} />
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;