import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

export const useSelectorLoading = () =>
  useSelector((state: RootState) => state.LoadingReducer);
