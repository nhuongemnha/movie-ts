import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiTietPhongVe, ghe, thongTinDatVe } from "@types";

interface typeInitialState {
  chiTietPhongVe?: ChiTietPhongVe;
  danhSachGheDangDat: ghe[];
  thongTinDatVe: thongTinDatVe;
  activeKey: number;
  danhSachGheKhachDat: [{ maGhe: number }, { maGhe: number }];
}

const initialState: typeInitialState = {
  danhSachGheDangDat: [],
  thongTinDatVe: {
    maLichChieu: 0,
    danhSachVe: [],
  },
  activeKey: 1,
  danhSachGheKhachDat: [{ maGhe: 53673 }, { maGhe: 53674 }],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeAction } =
  createSlice({
    name: "QuanLyDatVe",
    initialState,
    reducers: {
      setChiTietPhongVe: (
        state,
        action: PayloadAction<ChiTietPhongVe | undefined>
      ) => {
        state.chiTietPhongVe = action.payload;
      },
      setDSGheDat: (state, action: PayloadAction<ghe>) => {
        let newArrDD = [...state.danhSachGheDangDat];
        let index = newArrDD.findIndex(
          (gheDD) => gheDD.maGhe === action.payload.maGhe
        );
        if (index !== -1) {
          newArrDD.splice(index, 1);
        } else {
          newArrDD.push(action.payload);
        }
        state.danhSachGheDangDat = newArrDD;
        
        return state;
      },
      // setThongTinDatVe: (state, action: PayloadAction<thongTinDatVe>) => {
      //   state.thongTinDatVe = action.payload;
      //   console.log("thongTinDatVeReducer", state.thongTinDatVe);
      // },
      datVeHoanTat: (state, action: PayloadAction) => {
        state.danhSachGheDangDat = [];
      },
      changActiveKey: (state, action: PayloadAction<number>) => {
        state.activeKey = action.payload;
      },
    },
  });
