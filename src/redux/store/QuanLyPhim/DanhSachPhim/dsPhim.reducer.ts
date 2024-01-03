import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { arrFilm, ThongTinPhim } from "@types";

interface typeInitialState {
  arrFilm?: arrFilm[];
  sapChieu: boolean;
  dangChieu: boolean;
  arrFlimChange?: arrFilm[];
  thongTinPhim?: ThongTinPhim;
}

const initialState: typeInitialState = {
  sapChieu: false,
  dangChieu: false,
};

export const { reducer: dsPhimReducer, actions: dsPhimAction } = createSlice({
  name: "danhSachPhim",
  initialState,
  reducers: {
    setDanhSachPhim: (state, action: PayloadAction<arrFilm[]>) => {
      state.arrFilm = action.payload;
      state.arrFlimChange = [...state.arrFilm];
    },
    changeSapChieu: (state, action: PayloadAction<boolean>) => {
      state.sapChieu = action.payload;
      state.dangChieu = false;
      state.arrFlimChange = state.arrFilm?.filter(
        (phim) => phim.sapChieu === true
      );
      // state.arrFlimChange = state.arrSapChieu;
    },
    changeDangChieu: (state, action: PayloadAction<boolean>) => {
      state.dangChieu = action.payload;
      state.sapChieu = false;
      state.arrFlimChange = state.arrFilm?.filter(
        (phim) => phim.dangChieu === true
      );
      // state.arrFlimChange = state.arrDangChieu;
    },
    addPhim: (state, action: PayloadAction<any>) => {
      state.arrFilm?.push(action.payload);
    },
    setThongTinPhim: (state, action: PayloadAction<ThongTinPhim>) => {
      state.thongTinPhim = action.payload;
    },
  },
});
