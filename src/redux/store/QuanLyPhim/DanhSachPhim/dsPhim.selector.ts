import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/rootReducer";
import {
  getDanhSachPhim,
  getLayThongTinPhim,
  postThemPhimUploadHinhAnh,
} from "./dsPhim.thunk";

export const useSelectorDanhSachPhim = () =>
  useSelector((state: RootState) => state.dsPhimReducer);

//   call api lay du lieu gui len redux thunk

export const useDSPhim = () => {
  const dispatch = useDispatch<any>();
  const { arrFilm } = useSelectorDanhSachPhim();
  useEffect(() => {
    if (!arrFilm) {
      dispatch(getDanhSachPhim());
    }
  }, []);
  return { arrFilm };
};

export const useDispatchlayThongTinPhim = (maPhim: string) => {
  const dispatch = useDispatch<any>();
  let { thongTinPhim } = useSelectorDanhSachPhim();
  useEffect(() => {
    if (!thongTinPhim) {
      dispatch(getLayThongTinPhim(maPhim));
    }
  }, []);
  return { thongTinPhim };
};
