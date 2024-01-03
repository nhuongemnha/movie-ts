import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapService } from "Service/QuanLyRapService";
import { http } from "util/settings/config";
import { infoLichChieuAction } from "./ThongTinLichChieu.reducer";

export const getInfoLichChieu = createAsyncThunk(
  "ThongTinLichChieu/getInfoLichChieu",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyRapService.LayThongTinLichChieuHeThongRap();
      dispatch(infoLichChieuAction.setDSLichChieu(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getInfoChiTietPhim = createAsyncThunk(
  "ThongTinLichChieu/getInfoChiTietPhim",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyRapService.LayThongTinLichChieuPhim(id);
      dispatch(infoLichChieuAction.setChiTietPhim(result.data.content));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
