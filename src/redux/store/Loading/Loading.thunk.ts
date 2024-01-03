import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDangNhap = createAsyncThunk(
  "QuanLyNguoiDung/getDangNhap",
  async (values: { taiKhoan: string; matKhau: string }, { dispatch }) => {
    //   try {
    //     const result = await quanLyNguoiDungService.DangNhap(values);
    //     console.log(result);
    //     dispatch(quanLyNguoiDungAction.setThongTinDangNhap(result.data.content));
    //   } catch (error) {
    //     console.log(error);
    //   }
  }
);
