export const ACCESSTOKEN = "ACCESSTOKEN";
export const USER_LOGIN = "USER_LOGIN";

export interface ThongTinDangNhap {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}

// thong tin nguoi dung
export interface ThongTinNguoiDung {
  email: string;
  hoTen: string;
  loaiNguoiDung: { maLoaiNguoiDung: string; tenLoai: string };
  maLoaiNguoiDung: string;
  maNhom: string;
  matKhau: string;
  soDT: string;
  taiKhoan: string;
  thongTinDatVe: ThongTinDatVe[];
}
export interface ThongTinDatVe {
  giaVe: number;
  hinhAnh: string;
  maVe: number;
  ngayDat: string;
  tenPhim: string;
  thoiLuongPhim: number;
  danhSachGhe: DanhSachGhe[];
}
export interface DanhSachGhe {
  maCumRap: string;
  maGhe: number;
  maHeThongRap: string;
  maRap: number;
  tenCumRap: string;
  tenGhe: string;
  tenHeThongRap: string;
  tenRap: string;
}
