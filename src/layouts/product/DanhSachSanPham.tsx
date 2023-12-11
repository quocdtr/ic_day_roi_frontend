import React, {useEffect,useState} from "react";
import SanPhamModel from "../../models/SanPhamModel";
import { layToanBoSanPham, timKiemSanPham } from "../../api/SanPhamAPI";
import SanPhamProps from "./components/SanPhamprops";
import { error } from "console";
import { PhanTrang } from "../utils/PhanTrang";
import Category from "../utils/Category";

interface DanhSachSanPhamProps {
    tuKhoaTimKiem: string;
    maTheLoai: number;
}

function DanhSachSanPham({tuKhoaTimKiem, maTheLoai}: DanhSachSanPhamProps){
    const [danhSachSanPham, setDanhSachSanPham] =useState<SanPhamModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] =useState(true);
    const [baoLoi, setBaoLoi] =useState(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [tongSoSach, setSoSach] = useState(0);

    console.log(trangHienTai);
    useEffect(() => {
        if(tuKhoaTimKiem==='' && maTheLoai==0){
        layToanBoSanPham(trangHienTai-1).then(
            kq =>{
                setDanhSachSanPham(kq.ketQua);
                setTongSoTrang(kq.tongSoTrang);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    }else{
        timKiemSanPham(tuKhoaTimKiem, maTheLoai).then(
            kq =>{
                setDanhSachSanPham(kq.ketQua);
                setTongSoTrang(kq.tongSoTrang);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    }
    }, [trangHienTai, tuKhoaTimKiem, maTheLoai]);

    const phanTrang = (trang: number) => {
        setTrangHienTai(trang);
    };

    if(dangTaiDuLieu){
        return(
            <div>
                <h1>Đang tải dữ liệu.............</h1>
            </div>
        )
    }
    if(baoLoi){
        return(
            <div>
                <h1>Gặp Lỗi: {baoLoi}</h1>
            </div>
        )
    }
    if(danhSachSanPham.length===0){
    return (
        <div className="container">
            <div className="row" >
                <Category />
                <div className="row col-9 mt-4">
                    <h1>Không tìm thấy sản phẩm nào</h1>
                </div>  
                <PhanTrang trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={phanTrang}/>
            </div>
        </div>
    );
            }

    return (
        <div className="container">
            <div className="row" >
                <Category />
                <div className="row col-9 mt-4">
                {
                    danhSachSanPham.map((sanpham) => (
                        <SanPhamProps key={sanpham.maSanPham} sanPham={sanpham}/>
                    )

                    )
                }
                </div>  
                <PhanTrang trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={phanTrang}/>
            </div>
        </div>
    );
}
export default DanhSachSanPham;