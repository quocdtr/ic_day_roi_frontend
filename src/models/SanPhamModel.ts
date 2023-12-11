class SanPhamModel{
    maSanPham: number;
    tenSanPham?: string; // có thể bị null
    moTa?: string;
    giaBan?: number;
    giaNiemYet?: number;
    soLuongTonKho?: number;
    trungBinhXepHang?: number;

    constructor(
    maSanPham: number,
    tenSanPham: string,
    moTa: string,
    giaBan: number,
    giaNiemYet: number,
    soLuongTonKho: number,
    trungBinhXepHang: number,
    ){
        this.maSanPham = maSanPham;
        this.tenSanPham = tenSanPham;
        this.moTa = moTa;
        this.giaBan = giaBan;
        this.giaNiemYet = giaNiemYet;
        this.soLuongTonKho = soLuongTonKho;
        this.trungBinhXepHang = trungBinhXepHang;
    }

}
export default SanPhamModel;