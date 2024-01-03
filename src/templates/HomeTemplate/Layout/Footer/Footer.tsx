import React from "react";
import {
  useInfoLichChieu,
  useSelectorInfoLichChieu,
} from "redux/store/QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.selector";
import _ from "lodash";

type Props = {};

export default function Footer(props: Props) {
  let { ArrLichChieu } = useInfoLichChieu();
  console.log(ArrLichChieu);
  let arrHeThongRap = _.map(ArrLichChieu, (cumRap) =>
    _.pick(cumRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  console.log(arrHeThongRap);

  let renderLogo = () => {
    return (
      <div className="grid grid-cols-3">
        {arrHeThongRap.map((rap, i) => {
          return <img width={50} src={rap.logo} alt={rap.logo} key={i} />;
        })}
      </div>
    );
  };

  return (
    <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-300">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">CGV Việt Nam</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
            <a rel="noopener noreferrer" href="#">
              Giới Thiệu
            </a>
            <a rel="noopener noreferrer" href="#">
              Tiện Ích Online
            </a>
            <a rel="noopener noreferrer" href="#">
              Thẻ Quà Tặng
            </a>
            <a rel="noopener noreferrer" href="#">
              Tuyển Dụng
            </a>
            <a rel="noopener noreferrer" href="#">
              Liên Hệ Quản Cáo CGV
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Điều khoản sử dụng</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
            <a rel="noopener noreferrer" href="#">
              Điều Khoản Chung
            </a>
            <a rel="noopener noreferrer" href="#">
              Điều Khoản Giao Dịch
            </a>
            <a rel="noopener noreferrer" href="#">
              Chính Sách Thanh Toán
            </a>
            <a rel="noopener noreferrer" href="#">
              Chính Sách Bảo Mật
            </a>
            <a rel="noopener noreferrer" href="#">
              Câu Hỏi Thường Gặp
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Nhà Tài Trợ</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
            {renderLogo()}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Chăm Sóc Khách Hàng</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
            <a rel="noopener noreferrer" href="#">
              Hotline: 1900 6017
            </a>
            <a rel="noopener noreferrer" href="#">
              Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
            </a>
            <a rel="noopener noreferrer" href="#">
              Email hỗ trợ: hoidap@cgv.vn
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="dark:text-coolGray-400">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
