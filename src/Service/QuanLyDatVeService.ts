import { thongTinDatVe } from "@types";
import { http } from "util/settings/config";

export class QuanLyDatVe {
  layChiTietPhongVe = (maLichChieu: string) => {
    return http.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  datVe = (thongTinDatVe: thongTinDatVe) => {
    /**{
    "maLichChieu": 0,
    "danhSachVe": [
      {
        "maGhe": 0,
        "giaVe": 0
      }
    ]
  } */
    return http.post("/api/QuanLyDatVe/DatVe", thongTinDatVe);
  };
}

export const quanLyDatVeService = new QuanLyDatVe();
