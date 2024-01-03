import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "Service/QuanLyPhimService";
import { http } from "util/settings/config";
import { bannerAction } from "./banner.reducer";

export const getBanner = createAsyncThunk(
  "Banner/getBanner",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      console.log(result);
      dispatch(bannerAction.setBanner(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
