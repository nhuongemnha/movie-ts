import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { infoLichChieuAction } from "./ThongTinLichChieu.reducer";
import {
  getInfoChiTietPhim,
  getInfoLichChieu,
} from "./ThongTinLichChieu.thunk";

export const useSelectorInfoLichChieu = () =>
  useSelector((state: RootState) => state.infoLichChieuReducer);

export const useInfoLichChieu = () => {
  const dispatch = useDispatch<any>();
  const { ArrLichChieu } = useSelectorInfoLichChieu();
  useEffect(() => {
    if (!ArrLichChieu) {
      dispatch(getInfoLichChieu());
    }
    return () => {
      dispatch(getInfoLichChieu());
    };
  }, []);
  return { ArrLichChieu };
};

export const useInfoChiTietPhim = (id = "") => {
  const dispatch = useDispatch<any>();
  const { ArrChiTietPhim } = useSelectorInfoLichChieu();
  useEffect(() => {
    if (!ArrChiTietPhim) {
      dispatch(getInfoChiTietPhim(id));
    }
    return () => {
      dispatch(infoLichChieuAction.setChiTietPhim(undefined));
    };
  }, []);
  return { ArrChiTietPhim };
};
