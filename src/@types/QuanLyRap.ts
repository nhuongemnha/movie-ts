export interface ArrLichChieu {
  logo: string;
  maHeThongRap: string;
  mahom: string;
  tenHeThongRap: string;
  lstCumRap?: lstCumRap[];
}
export interface lstCumRap {
  danhSachPhim: danhSachPhim[];
  diaChi: string;
  hinhAnh: string;
  maCumRap: string;
  tenCumRap: string;
}
export interface danhSachPhim {
  dangChieu: boolean;
  hinhAnh: string;
  hot: boolean;
  lstLichChieuTheoPhim: lstLichChieuTheoPhim[];
  maPhim: number;
  sapChieu: boolean;
  tenPhim: string;
}
export interface lstLichChieuTheoPhim {
  giaVe: number;
  maLichChieu: number;
  maRap: string;
  ngayChieuGioChieu: string;
  tenRap: string;
}

export interface ArrChiTietPhim {
  biDanh: string;
  dangChieu: boolean;
  danhGia: number | undefined;
  heThongRapChieu: heThongRapChieu[];
  hinhAnh: string;
  hot: true;
  maNhom: string;
  maPhim: number;
  moTa: string;
  ngayKhoiChieu: string;
  sapChieu: boolean;
  tenPhim: string;
  trailer: string;
}
export interface heThongRapChieu {
  cumRapChieu: cumRapChieu[];
  logo: string;
  maHeThongRap: string;
  tenHeThongRap: string;
}
export interface cumRapChieu {
  diaChi: string;
  hinhAnh: string;
  lichChieuPhim: lichChieuPhim[];
  maCumRap: string;
  tenCumRap: string;
}
export interface lichChieuPhim {
  giaVe: number;
  maLichChieu: string;
  maRap: string;
  ngayChieuGioChieu: string;
  tenRap: string;
  thoiLuong: number;
}
