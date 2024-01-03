import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dsPhimAction } from "redux/store/QuanLyPhim/DanhSachPhim/dsPhim.reducer";
import {
  useDSPhim,
  useSelectorDanhSachPhim,
} from "redux/store/QuanLyPhim/DanhSachPhim/dsPhim.selector";
import { useInfoLichChieu } from "redux/store/QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.selector";
import HomeCarousel from "templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import Slider from "../_Components/Swiper/Slider";
import HomeMenu from "./HomeMenu/HomeMenu";

type Props = {};

export default function Home(props: Props) {
  // call api lay du lieu
  let dispatch = useDispatch();
  let { arrFilm } = useDSPhim();
  let { dangChieu, sapChieu, arrFlimChange } = useSelectorDanhSachPhim();
  console.log(arrFlimChange);

  let { ArrLichChieu } = useInfoLichChieu();
  console.log(ArrLichChieu);

  // xu ly btn
  let activePhimSapChieu = sapChieu === true ? "activePhim" : "noneActive";
  let activePhimDangChieu = dangChieu === true ? "activePhim" : "noneActive";

  return (
    <div className="container">
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-5 mx-auto">
          <button
            type="button"
            className={`${activePhimDangChieu} px-8 py-3 font-semibold rounded mr-2 mt-2 `}
            onClick={() => dispatch(dsPhimAction.changeDangChieu(true))}
          >
            Phim Đang Chiếu
          </button>
          <button
            id="btnSapchieu"
            type="button"
            className={`${activePhimSapChieu} px-8 py-3 font-semibold rounded mt-2`}
            onClick={() => dispatch(dsPhimAction.changeSapChieu(true))}
          >
            Phim Sắp Chiếu
          </button>
          <Slider arrFlimChange={arrFlimChange} />
        </div>
      </section>
      <div className="Menu ml-10">
        <HomeMenu ArrLichChieu={ArrLichChieu} />
      </div>
    </div>
  );
}
