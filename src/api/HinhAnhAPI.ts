import React from "react";
import HinhAnhModel from "../models/HinhAnhModel";
import { my_request } from "./Request";
import SanPhamModel from "../models/SanPhamModel";

export async function layToanBoAnh(maSanPham: number):Promise<HinhAnhModel[]> {
    const ketQua:HinhAnhModel[] =[];

    const duongDan:string = `http://localhost:8080/san-pham/${maSanPham}/danhSachHinhAnh`;

    const response = await my_request(duongDan);
    const responseData = response._embedded.hinhAnhs;
     // console.log(responseData);
     for(const key in responseData){
       ketQua.push({
        maHinhAnh: responseData[key].maHinhAnh,
        tenHinhAnh: responseData[key].tenHinhAnh,
        laIcon: responseData[key].laIcon,
        duongDan: responseData[key].duongDan,
        duLieuAnh: responseData[key].duLieuAnh
       });
     }
     return ketQua;
}

