import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { quanLyDatVeAction } from "redux/store/QuanLyDatVe/QuanLyDatVe.reducer";
import {
  useChiTietPhongVe,
  useSelectorQuanLyDatVe,
} from "redux/store/QuanLyDatVe/QuanLyDatVe.selector";
import {
  useDispatchThongTinNguoiDung,
  useSelectorQuanLyNguoiDung,
} from "redux/store/QuanLyNguoiDung";
import _ from "lodash";
import { UserOutlined } from "@ant-design/icons";
import { datVe } from "redux/store/QuanLyDatVe/QuanLyDatVe.thunk";
// import antd
import { Tabs } from "antd";
import moment from "moment";

type Props = {};

// CheckOut
function Checkout(props: Props) {
  // dispatch
  let dispatch = useDispatch<any>();
  // -------------------------------
  let { thongTinDangNhap } = useSelectorQuanLyNguoiDung();
  // lay id tu` url
  let { id } = useParams<{ id: string }>();
  // truyen id len api reduxthunk
  let { chiTietPhongVe } = useChiTietPhongVe(id);
  // lay du lieu danhSachGheDangDat
  let { danhSachGheDangDat, thongTinDatVe, danhSachGheKhachDat } =
    useSelectorQuanLyDatVe();

  // render danh sach ghe
  let renderDSGhe = () => {
    return chiTietPhongVe?.danhSachGhe.map((ghe, i) => {
      let gheVip = ghe.loaiGhe == "Vip" ? "gheVip" : "";
      let gheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      // thay đổi class danh sách ghế đang đặt cho nút btn
      let gheDangDat = "";
      let index = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (index != -1) {
        gheDangDat = "gheDangDat";
      }
      // thay doi css btn khi chinh minh dat
      let nguoiDungDatGhe = "";
      if (thongTinDangNhap?.taiKhoan === ghe.taiKhoanNguoiDat) {
        nguoiDungDatGhe = "nguoiDungDatGhe";
      }
      // thay class khach dang dat
      let khachDangDat = "";
      let indexDSGheKhachDat = danhSachGheKhachDat.findIndex(
        (gheKD) => gheKD.maGhe === ghe.maGhe
      );
      if (indexDSGheKhachDat != -1) {
        khachDangDat = "khachDangDat";
      }

      return (
        <Fragment key={i}>
          <button
            disabled={ghe.daDat || khachDangDat != ""}
            className={`ghe ${gheVip} ${gheDaDat} ${gheDangDat} ${nguoiDungDatGhe} ${khachDangDat}`}
            key={i}
            onClick={() => {
              dispatch(quanLyDatVeAction.setDSGheDat(ghe));
            }}
          >
            {nguoiDungDatGhe != "" ? <UserOutlined /> : ghe.stt}
          </button>
          {(i + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12">
        {/* PHAN LUA CHON GHE */}
        <div className="col-span-9">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-black w-4/5 h-4"></div>
            <div className={`trapezoid text-center text-black`}></div>
          </div>
          <div className="text-center">{renderDSGhe()}</div>
        </div>
        {/* THANH TOAN VE */}
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
          <hr />
          <h3 className="text-xl">{chiTietPhongVe?.thongTinPhim.tenPhim}</h3>
          <p>{chiTietPhongVe?.thongTinPhim.diaChi}</p>
          <p>
            ngày chiếu: {chiTietPhongVe?.thongTinPhim.ngayChieu} -{" "}
            {chiTietPhongVe?.thongTinPhim.gioChieu}{" "}
            {chiTietPhongVe?.thongTinPhim.tenRap}
          </p>
          <hr />
          <div className="flex flex-row my-4">
            <div className="w-4/5">
              <span>Ghế: </span>
              {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, i) => {
                return (
                  <span className="text-red-400 text-lg ml-1" key={i}>
                    {gheDD.stt}
                  </span>
                );
              })}
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">
                {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                  return (tongTien += gheDD.giaVe);
                }, 0)}
              </span>
            </div>
          </div>
          <hr />
          <div className="my-4">
            <i>Email</i> <br />
            {thongTinDangNhap?.email}
          </div>
          <hr />
          <div className="my-4">
            <i>Phone</i> <br />
            {thongTinDangNhap?.soDT}
          </div>
          <hr />
          <div className="mb-0 h-auto flex flex-col justify-center items-center">
            <div
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-xl cursor-pointer"
              onClick={() => {
                let newThongTinDatVe = { ...thongTinDatVe };
                newThongTinDatVe.maLichChieu = parseInt(id);
                newThongTinDatVe.danhSachVe = danhSachGheDangDat;
                // console.log("thongtinDatVe", thongTinDatVe);
                thongTinDatVe = newThongTinDatVe;
                dispatch(datVe(thongTinDatVe));
              }}
            >
              ĐẶT VÉ
            </div>
            <table className="table-auto mt-3 border-collapse border-2 border-black">
              <tbody>
                <tr>
                  <th>Ghế chưa đặt</th>
                  <td>
                    <button className="ghe">00</button>
                  </td>
                  <th>Ghế Đang Đặt</th>
                  <td>
                    <button className="ghe gheDangDat">00</button>
                  </td>
                </tr>
                <tr>
                  <th>Ghế VIP</th>
                  <td>
                    <button className="ghe gheVip">00</button>
                  </td>
                  <th>Ghế người dùng </th>
                  <td>
                    <button className="ghe nguoiDungDatGhe">
                      <UserOutlined />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>gheDaDat</th>
                  <td>
                    <button className="ghe gheDaDat">00</button>
                  </td>
                  <th>Khach Dang Dat</th>
                  <td>
                    <button className="ghe khachDangDat">00</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

//tab antd
const { TabPane } = Tabs;

// giao dien mac dinh

export default function (props: Props) {
  let dispatch = useDispatch();
  let { activeKey } = useSelectorQuanLyDatVe();
  return (
    <div className="p-3">
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey.toString()}
        onChange={(key) => {
          dispatch(quanLyDatVeAction.changActiveKey(parseInt(key)));
          console.log(key);
        }}
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe />
        </TabPane>
      </Tabs>
    </div>
  );
}

// 02 lich su dat ve

function KetQuaDatVe(props: Props) {
  let { thongTinNguoiDung } = useDispatchThongTinNguoiDung();

  console.log("thongTinNguoiDung", thongTinNguoiDung);

  let renderTicketItem = () => {
    return thongTinNguoiDung?.thongTinDatVe.map((ve, i) => {
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={i}>
          <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ve.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-purple-400 title-font font-medium">
                {ve.tenPhim}
              </h2>
              <p className="text-pink-500">
                Ngày Chiếu : {moment(ve.ngayDat).format("hh:mm A")} - Giờ Chiếu{" "}
                {moment(ve.ngayDat).format("DD/MM/YYYY")}
              </p>
              <p className="text-pink-500">
                {_.first(ve.danhSachGhe)?.tenHeThongRap}
              </p>
              <p className="text-pink-500">
                {_.first(ve.danhSachGhe)?.tenRap} - Ghế{" "}
                {ve.danhSachGhe.map((ghe, i) => {
                  return (
                    <span className="ml-1" key={i}>
                      [{ghe.tenGhe}]
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-400">
            Lịch Sử Đặt Vé
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-400">
            xem kĩ thông tin phim và ngày giờ bạn nhé !
          </p>
        </div>
        <div className="flex flex-wrap -m-2"> {renderTicketItem()}</div>
      </div>
    </section>
  );
}
