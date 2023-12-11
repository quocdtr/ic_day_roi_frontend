import React, { useEffect, useState } from "react";
import SanPhamModel from "../../../models/SanPhamModel";
import { layToanBoAnh } from "../../../api/HinhAnhAPI";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";


interface HinhAnhSanPham{
    maSanPham: number;
}
const HinhAnhSanPham: React.FC<HinhAnhSanPham> = (props) => {
      const maSanPham: number =props.maSanPham;

      const [danhSachAnh, setDanhSachAnh] =useState<HinhAnhModel[]>([]);
      const [dangTaiDuLieu, setDangTaiDuLieu] =useState(true);
      const [baoLoi, setBaoLoi] =useState(null);
      const [hinhAnhDangChon, setHinhAnhDangChon] =useState<HinhAnhModel|null>(null);

      const chonAnh=(hinhAnh: HinhAnhModel)=>{
        setHinhAnhDangChon(hinhAnh);
      }

      useEffect(() => {
        layToanBoAnh(maSanPham).then(
             danhSach =>{
                setDanhSachAnh(danhSach);
                if(danhSach.length>0){
                    setHinhAnhDangChon(danhSach[0]);
                }
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    }, [] // Chi goi mot lan
    )
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

return (
        <div className="col-md-3 mt-4">
            <div>
                {(hinhAnhDangChon)&& <img src={hinhAnhDangChon.duLieuAnh} style={{width:'400px'}}/>}
            </div>
        </div>
    );
}
export default HinhAnhSanPham;