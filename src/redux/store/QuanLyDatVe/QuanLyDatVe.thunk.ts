import { createAsyncThunk } from "@reduxjs/toolkit";
import { ghe, thongTinDatVe } from "@types";
import { quanLyDatVeService } from "Service/QuanLyDatVeService";
import { LoadingAction } from "../Loading/Loading.reducer";
import { quanLyDatVeAction } from "./QuanLyDatVe.reducer";

// noi de goi api

export const getChiTietPhongVe = createAsyncThunk(
  "QuanLyDatVe/getChiTietPhongVe",
  async (maLichChieu: string, { dispatch }) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      dispatch(quanLyDatVeAction.setChiTietPhongVe(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);

export const datVe = createAsyncThunk(
  "QuanLyDatVe/datVe",
  async (thongTinDatVe: thongTinDatVe, { dispatch }) => {
    try {
      dispatch(LoadingAction.setIsLoading(true));
      // ------------------------
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      // if (result.status === 200) {
      //   dispatch(quanLyDatVeAction.setThongTinDatVe(result.data.content));
      // }
      console.log(result);
      // call lai api get chi tiet phong ve
      await dispatch(getChiTietPhongVe(thongTinDatVe.maLichChieu as string));
      await dispatch(quanLyDatVeAction.datVeHoanTat());
      // tat giao dien loading
      dispatch(LoadingAction.setIsLoading(false));
      // sau khi click btn datve day sang trang lichsudatve
      dispatch(quanLyDatVeAction.changActiveKey(2));
    } catch (error) {
      console.log(error);
    }
  }
);

// export const datVeAction = (ghe: ghe, maLichChieu: number) => {
//   return async (dispatch: any, getState: any) => {
//     dispatch(quanLyDatVeAction.setDSGheDat(ghe));

//     let danhSachGheDangDat = getState().quanLyDatVeReducer.danhSachGheDangDat;
//     let taiKhoan = getState().quanLyNguoiDungReducer.thongTinDangNhap.taiKhoan;

//     console.log("danhSachGheDangDat", danhSachGheDangDat);
//     console.log("taiKhoan", taiKhoan);
//     console.log("maLichChieu", maLichChieu);

//     // bien doi danhSachGheDangDat thanh chuoi
//     danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

//     // // call api signalR
//     // connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
//   };
// };
