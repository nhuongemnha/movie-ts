import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArrChiTietPhim, ArrLichChieu } from "@types";

interface typeInitialState {
  ArrLichChieu?: ArrLichChieu[];
  ArrChiTietPhim?: ArrChiTietPhim;
}

const initialState: typeInitialState = {
};

export type PayloadChiTietPhim = PayloadAction<ArrChiTietPhim | undefined>

export const { reducer: infoLichChieuReducer, actions: infoLichChieuAction } =
  createSlice({
    name: "infoLichChieu",
    initialState,
    reducers: {
      setDSLichChieu: (state, action: PayloadAction<ArrLichChieu[]>) => {
        state.ArrLichChieu = action.payload;
      },

      // nó chạy vào đây nó sẽ lại chi tiết phim về undefined
      setChiTietPhim: (state, action: PayloadChiTietPhim) => {
        state.ArrChiTietPhim = action.payload;
      },
    },
  });
