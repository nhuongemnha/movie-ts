import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imgBanner } from "@types";

interface typeInitialState {
  imgBanner?: imgBanner[];
}

const initialState: typeInitialState = {};

export const { reducer: bannerReducer, actions: bannerAction } = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<imgBanner[]>) => {
      state.imgBanner = action.payload;
    },
  },
});
