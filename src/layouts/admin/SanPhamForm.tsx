import { error } from 'console';
import React, { FormEvent, useState } from 'react';
import RequireAdmin from './RequireAdmin';


const SanPhamForm: React.FC = () => {
    const [sanPham, setSanPham] = useState({
        maSanPham: 0,
        tenSanPham: '',
        giaBan: 0,
        giaNiemYet: 0,
        moTa: '',
        soLuong: 0,
        trungBinhXepHang: 0,
    })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        fetch(  'http://localhost:8080/san-pham',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(sanPham)
            }
        ).then((reponse)=>{
            if(reponse.ok){
                alert("Đã thêm sản phẩm thành công!");
                setSanPham({
                    maSanPham: 0,
                    tenSanPham: '',
                    giaBan: 0,
                    giaNiemYet: 0,
                    moTa: '',
                    soLuong: 0,
                    trungBinhXepHang: 0,
                })
            }else{
                alert("Gặp lỗi trong quá trình thêm sản phẩm");
            }
        })
    }

    return (
        <div className='container row d-flex align-items-center justify-content-center'>
            <div className=''>
                <h1>Thêm sản phẩm mới</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type='hidden'
                        id='maSanPham'
                        value={sanPham.maSanPham}
                    />

                    <label htmlFor='tenSanPham'>Tên sản phẩm</label>
                    <input
                        className='form-control'
                        type='text'
                        value={sanPham.tenSanPham}
                        onChange={(e) => setSanPham({ ...sanPham, tenSanPham: e.target.value })}
                        required
                    />

                    <label htmlFor='giaBan'>Giá bán</label>
                    <input
                        className='form-control'
                        type='number'
                        value={sanPham.giaBan}
                        onChange={(e) => setSanPham({ ...sanPham, giaBan: parseFloat(e.target.value) })}
                        required
                    />

                    <label htmlFor='giaNiemYet'>Giá niêm yết</label>
                    <input
                        className='form-control'
                        type='number'
                        value={sanPham.giaNiemYet}
                        onChange={(e) => setSanPham({ ...sanPham, giaNiemYet: parseFloat(e.target.value) })}
                        required
                    />

                    <label htmlFor='soLuong'>soLuong</label>
                    <input
                        className='form-control'
                        type='number'
                        value={sanPham.soLuong}
                        onChange={(e) => setSanPham({ ...sanPham, soLuong: parseInt(e.target.value) })}
                        required
                    />

                   
                    <label htmlFor='moTa'>Mô tả</label>
                    <input
                        className='form-control'
                        type='moTa'
                        value={sanPham.moTa}
                        onChange={(e) => setSanPham({ ...sanPham, moTa: e.target.value })}
                        required
                    />
                    <button type='submit' className='btn btn-success mt-2'>Lưu</button>
                </form>
            </div>
        </div>
    )
}
const SanPhamForm_Admin = RequireAdmin(SanPhamForm);
export default SanPhamForm_Admin