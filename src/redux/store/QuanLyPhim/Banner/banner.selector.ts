import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/rootReducer";
import { getBanner } from "./banner.thunk";

export const useSelectorBanner = () =>
  useSelector((state: RootState) => state.bannerReducer);

//   call api lay du lieu gui len redux thunk

export const useBanner = () => {
  const dispatch = useDispatch<any>();
  const { imgBanner } = useSelectorBanner();
  useEffect(() => {
    if (!imgBanner) {
      dispatch(getBanner());
    }
  }, []);
  return { imgBanner };
};
