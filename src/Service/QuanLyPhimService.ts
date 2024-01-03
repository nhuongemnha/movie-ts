import { formData } from "@types";
import { http } from "util/settings/config";

export class QuanLyPhimService {
  layDanhSachBanner = () => {
    return http.get("/api/QuanLyPhim/LayDanhSachBanner");
  };
  LayDanhSachPhim = () => {
    return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  };
  themPhimUploadHinh = (formData: formData) => {
    return http.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };
  laythongTinPhim = (maPhim: string) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
