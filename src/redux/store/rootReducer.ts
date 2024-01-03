import { combineReducers } from "redux";
import { LoadingReducer } from "./Loading/Loading.reducer";
import { quanLyDatVeReducer } from "./QuanLyDatVe/QuanLyDatVe.reducer";
import { quanLyNguoiDungReducer } from "./QuanLyNguoiDung/QuanLyNguoiDung.reducer";
import { bannerReducer } from "./QuanLyPhim/Banner/banner.reducer";
import { dsPhimReducer } from "./QuanLyPhim/DanhSachPhim/dsPhim.reducer";
import { infoLichChieuReducer } from "./QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  bannerReducer,
  dsPhimReducer,
  infoLichChieuReducer,
  quanLyNguoiDungReducer,
  quanLyDatVeReducer,
  LoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
