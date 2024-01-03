import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "Service/QuanLyPhimService";
import { dsPhimAction } from "./dsPhim.reducer";

export const getDanhSachPhim = createAsyncThunk(
  "DanhSachPhim/getDanhSachPhim",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyPhimService.LayDanhSachPhim();
      console.log(result);
      dispatch(dsPhimAction.setDanhSachPhim(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);

export const postThemPhimUploadHinhAnh = createAsyncThunk(
  "DanhSachPhim/postThemPhimUploadHinhAnh",
  async (formData: any, { dispatch }) => {
    try {
      const result = await quanLyPhimService.themPhimUploadHinh(formData);
      dispatch(dsPhimAction.setDanhSachPhim(result.data.content));
      console.log(result);
      alert("thêm phim thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const getLayThongTinPhim = createAsyncThunk(
  "DanhSachPhim/getLayThongTinPhim",
  async (maPhim: string, { dispatch }) => {
    try {
      const result = await quanLyPhimService.laythongTinPhim(maPhim);
      console.log(result);
      dispatch(dsPhimAction.setThongTinPhim(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
