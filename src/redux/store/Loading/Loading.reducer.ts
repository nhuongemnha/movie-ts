import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface typeInitialState {
  isLoading: boolean;
}

const initialState: typeInitialState = {
  isLoading: false,
};

export const { reducer: LoadingReducer, actions: LoadingAction } = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
