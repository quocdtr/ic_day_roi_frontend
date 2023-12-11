import React, { useEffect, useState } from "react";
import SanPhamModel from "../../../models/SanPhamModel";
import { layToanBoAnh } from "../../../api/HinhAnhAPI";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { Link } from "react-router-dom";
import dinhDangSo from "../../utils/DinhDangSo";


interface SanPhamPropsInterface{
    sanPham: SanPhamModel;
}
const SanPhamProps: React.FC<SanPhamPropsInterface> = (props) => {
    const headingStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '10px',
        fontWeight: 'bold',
        fontStyle: 'normal',
      };
      const paragramStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '8px',
        fontWeight: 'bolder',
        fontStyle: 'normal',
      };
      const maSanPham: number =props.sanPham.maSanPham;
      const [danhSachAnh, setDanhSachAnh] =useState<HinhAnhModel[]>([]);
      const [dangTaiDuLieu, setDangTaiDuLieu] =useState(true);
        const [baoLoi, setBaoLoi] =useState(null);
      useEffect(() => {
        layToanBoAnh(maSanPham).then(
            hinhAnhData =>{
                setDanhSachAnh(hinhAnhData);
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

    let duLieuAnh: string = "";
    if(danhSachAnh[0] && danhSachAnh[0].duLieuAnh){
        duLieuAnh = danhSachAnh[0].duLieuAnh;
    }

return (
    <div className="col-md-3 mt-2">
            <div className="card">
                <Link to={`/san-pham/${props.sanPham.maSanPham}`}>
                <img
                    src={duLieuAnh}
                    className="card-img-top"
                    alt={props.sanPham.maSanPham+""}
                    style={{ height: '200px' }}
                />
                </Link>
                <div className="card-body">
                    <Link to={`/san-pham/${props.sanPham.maSanPham}`} style={{textDecoration: 'none'}} >
                    <h5 className="card-title" style={headingStyle}>{props.sanPham.tenSanPham}</h5>
                    </Link>
                    <p className="card-text" style={paragramStyle}>{props.sanPham.tenSanPham}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{dinhDangSo(props.sanPham.giaNiemYet)}đ</del>
                        </span>
                        <span className="discounted-price text-end">
                            <strong>{dinhDangSo(props.sanPham.giaBan)}đ</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SanPhamProps;