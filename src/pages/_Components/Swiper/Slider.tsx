import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "../../../assets/scss/Components/Swiper/SwiperStyle.scss";

// import required modules
import { Pagination } from "swiper";
import Film from "../Flim/Film";
import Film_Slip from "../Flim/Film_Slip";
import { arrFilm } from "@types";

type Props = {
  arrFlimChange?: arrFilm[];
};

export default function Slider(props: Props) {
  // console.log(arrFilm);
  let { arrFlimChange } = props;
  // console.log(arrFilm);

  let renderFilm = () => {
    return arrFlimChange?.slice(0, 12).map((phim, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="flex flex-wrap -m-4">
            <div className="p-0 lg:w-1/3" style={{ width: "100%" }}>
              <Film_Slip phim={phim} />
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderFilm()}
      </Swiper>
    </>
  );
}
