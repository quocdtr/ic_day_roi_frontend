import React from "react";
import SanPhamModel from "../models/SanPhamModel";
import { request } from "http";
import { my_request } from "./Request";

interface KetQuaInterface{
    ketQua:SanPhamModel[];
    tongSoTrang: number;
    tongSoSanPham: number;
}
async function laySanPham(duongDan: string): Promise<KetQuaInterface> {
    const ketQua: SanPhamModel[] = [];
    
    // Gọi phương thức request
    const response = await my_request(duongDan);

    // Lấy ra json sach
    const responseData = response._embedded.sanPhams;
    console.log(responseData);

    // lấy thông tin trang
    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;

    for (const key in responseData) {
        ketQua.push({
            maSanPham: responseData[key].maSanPham, 
            tenSanPham: responseData[key].tenSanPham,
            moTa: responseData[key].moTa,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            soLuongTonKho: responseData[key].soLuongTonKho,
            trungBinhXepHang: responseData[key].trungBinhXepHang,
        });
    }

    return {ketQua: ketQua, tongSoSanPham: tongSoTrang, tongSoTrang: tongSoTrang};
}

export async function layToanBoSanPham(trang: number): Promise<KetQuaInterface> {
   
    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/san-pham?sort=maSanPham,desc&size=8&page=${trang}`;

    return laySanPham(duongDan);

}
export async function timKiemSanPham(tuKhoaTimKiem: string, maTheLoai: number): Promise<KetQuaInterface> {
   
    // Xác định endpoint
    let duongDan: string = `http://localhost:8080/san-pham?sort=maSanPham,desc&size=8&page=0`;
    if(tuKhoaTimKiem !== ''&& maTheLoai==0){
        duongDan =`http://localhost:8080/san-pham/search/findByTenSanPhamContaining?sort=maSanPham,desc&size=8&page=0&tenSanPham=${tuKhoaTimKiem}`
    }else  if (tuKhoaTimKiem === '' && maTheLoai>0) {
        duongDan=`http://localhost:8080/san-pham/search/findByDanhSachTheLoai_MaTheLoai?sort=maSanPham,desc&size=8&page=0&maTheLoai=${maTheLoai}`
    }else  if (tuKhoaTimKiem !== '' && maTheLoai>0) {
        duongDan=`http://localhost:8080/san-pham/search/findByTenSanPhamContainingAndDanhSachTheLoai_MaTheLoai?sort=maSanPham,desc&size=8&page=0&maTheLoai=${maTheLoai}&tenSanPham=${tuKhoaTimKiem}`
    }
    return laySanPham(duongDan);

}
export async function laySanPhamTheoMa(maSanPham: number): Promise<SanPhamModel|null> {
    let duongDan = `http://localhost:8080/san-pham/${maSanPham}`;
    let ketQua: SanPhamModel;
    try {
        const response = await fetch(duongDan);

        if (!response.ok) {
            throw new Error('Gặp lỗi trong quá trình gọi dữ liệu');
        }

        const sanPhamData = await response.json();

        if (sanPhamData) {
            return {
                maSanPham: sanPhamData.maSanPham,
                tenSanPham: sanPhamData.tenSanPham,
                moTa: sanPhamData.moTa,
                giaBan: sanPhamData.giaBan,
                giaNiemYet: sanPhamData.giaNiemYet,
                soLuongTonKho: sanPhamData.soLuongTonKho,
                trungBinhXepHang: sanPhamData.trungBinhXepHang
            };
        } else {
            throw new Error('Sản phẩm không tồn tại');
        }
    } catch (error) {
        console.error("Error", error);
        return null;
    }
}