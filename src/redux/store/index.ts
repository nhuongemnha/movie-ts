import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk]
})

