import { ThongTinDangNhap } from "@types";
import { http } from "util/settings/config";
import { string } from "yup";

export class QuanLyNguoiDungService {
  DangNhap = (values: { taiKhoan: string; matKhau: string }) => {
    return http.post("/api/QuanLyNguoiDung/DangNhap", values);
  };
  layThongTinNguoiDung = () => {
    return http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
