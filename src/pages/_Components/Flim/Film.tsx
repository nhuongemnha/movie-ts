import React from "react";

type Props = {
  phim: Film;
};

export default function Film(props: Props) {
  let { maPhim, tenPhim, hinhAnh, moTa } = props.phim;
  return (
    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 setupBgImg"
        style={{ backgroundImage: `url(${hinhAnh})` }}
      >
        <img src={hinhAnh} alt={hinhAnh} className="w-full opacity-0" />
      </div>
      <h1 className="title-font sm:text-2xl text-base font-medium text-gray-900 mb-3">
        {tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-36" style={{ fontSize: "14px" }}>
        {moTa.length > 200 ? (
          <span>{moTa.slice(0,200)}...</span>
        ) : (
          <span>{moTa}</span>
        )}
      </p>
      <a className="text-indigo-500 inline-flex items-center relative top-4">
        Đặt Vé
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

interface Film {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}
