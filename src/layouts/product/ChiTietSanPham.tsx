import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { error } from "console";
import SanPhamModel from "../../models/SanPhamModel";
import { laySanPhamTheoMa } from "../../api/SanPhamAPI";
import HinhAnhSanPham from "./components/HinhAnhSanPham";
import dinhDanhSo from "../utils/DinhDangSo";
import dinhDangSo from "../utils/DinhDangSo";

const ChiTietSanPham: React.FC = () => {
    // Lấy mã sách từ URL
    const { maSanPham } = useParams();
    let maSanPhamNumber = 0;
    try {
        maSanPhamNumber = parseInt(maSanPham + '');
        if (Number.isNaN(maSanPhamNumber))
        maSanPhamNumber = 0;
    } catch (error) {
        maSanPhamNumber = 0;
        console.error("Error", error);
    }

    // Khai báo
    const [sanPham, setSanPham] = useState<SanPhamModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);
    const [soLuong, setSoLuong] = useState(1);

    const tangSoLuong =()=>{
        const soLuongHienTai = (sanPham&&sanPham.soLuongTonKho?sanPham.soLuongTonKho:0)
        if(soLuong<soLuongHienTai){
            setSoLuong(soLuong+1);
        }
    }
    const giamSoLuong =()=>{
        if(soLuong>1){
        setSoLuong(soLuong-1);
        }
    }
    const handleSoLuongChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const soLuongMoi = parseInt(event.target.value);
        const soLuongTonKho = (sanPham && sanPham.soLuongTonKho ? sanPham.soLuongTonKho : 0);
        if (!isNaN(soLuongMoi) && soLuongMoi >= 1 && soLuongMoi <= soLuongTonKho) {
            setSoLuong(soLuongMoi);
        }
    }
    const handleThemVaoGioHang =()=>{
        
    }


    useEffect(() => {
        laySanPhamTheoMa(maSanPhamNumber)
            .then((sach) => {
                setSanPham(sach);
                setDangTaiDuLieu(false);
            }
            )
            .catch((error) => {
                setBaoLoi(error.message);
                setDangTaiDuLieu(false);
            })
    }, [maSanPham]
    )

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }

    if (baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }

    if (!sanPham) {
        return (
            <div>
                <h1>Sách không tồn tại!</h1>
            </div>
        );
    }

    return (
    <div className="container">
        <div className="row mt-4 mb-4">
            <div className="col-4">
                <HinhAnhSanPham maSanPham={maSanPhamNumber}/>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-8">
                        <h1>{sanPham.tenSanPham}</h1>
                        <p>Giá bán: { dinhDangSo(sanPham.giaBan)} VND</p>
                        <p>Số lượng tồn kho: {sanPham.soLuongTonKho}</p>
                        <p>
                            Mô Tả: {sanPham.moTa}
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="mb-2">Số Lượng</div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary me-2" onClick={giamSoLuong}>-</button>
                            <input
                                className="form-control text-center"
                                type="number"
                                value={soLuong}
                                min={1}
                                onChange={handleSoLuongChange}
                            />
                            <button className="btn btn-outline-secondary me-2" onClick={tangSoLuong}>+</button>
                        </div>
                        {
                           sanPham.giaBan && (
                            <div className="mt-2 text-center">
                                Số tiền tạm tính<br/>
                                <h5>{dinhDangSo(soLuong*sanPham.giaBan)} VND</h5>
                            </div>
                           ) 
                        }<button type="button" className="btn btn-danger mt-2" onClick={handleThemVaoGioHang}>Thêm vào giỏ hàng</button>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default ChiTietSanPham;