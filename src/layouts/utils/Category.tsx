import React from "react";
function Category(){
    return(
                <div className="col-3 mt-4">
                <ul className="list-group">
                    <li><a className="list-group-item active" href="/">Danh mục sản phẩm</a></li>
                    <li><a className="list-group-item" href="">RASPBERRY PI</a></li>
                    <li><a className="list-group-item" href="/1">ARDUINO</a></li>
                    <li className="list-group-item">MÀN HÌNH LCD</li>
                    <li className="list-group-item">MODULE</li>
                    <li className="list-group-item">NGUỒN</li>
                    <li className="list-group-item">CẢM BIẾN</li>
                    <li className="list-group-item">ĐỘNG CƠ & ROBOT</li>
                    <li className="list-group-item">IC</li>
                    <li className="list-group-item">DIODE & ZENER</li>
                    <li className="list-group-item">TRANSISTORS & TRIACS</li>
                    <li className="list-group-item">MOSFETS & FETS</li>
                    <li className="list-group-item">TỤ ĐIỆN</li>
                    <li className="list-group-item">ĐIỆN TRỞ</li>
                    <li className="list-group-item">BIẾN TRỞ</li>
                    <li className="list-group-item">CUỘN CẢM</li>
                    <li className="list-group-item">LINH KIỆN KHÁC</li>
                    <li className="list-group-item">DỤNG CỤ LÀM MẠCH</li>
                </ul>
                </div>
    );
}
export default Category;