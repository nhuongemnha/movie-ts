import React, { useEffect, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { useInfoChiTietPhim } from "redux/store/QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.selector";
import { NavLink, RouteComponentProps, useParams } from "react-router-dom";
import { StaticContext } from "react-router";
import moment from "moment";
import { useDispatch } from "react-redux";
import { infoLichChieuAction } from "redux/store/QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.reducer";

type Props = {};

const { TabPane } = Tabs;

type useState = {
  tabPosition: any;
};

const onChange = (key: string) => {
  console.log(key);
};

// render

export default function Details(props: Props) {
  const [state, setState] = useState<useState>({
    tabPosition: "left",
  });

  const changeTabPosition = (e: RadioChangeEvent) => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;

  // dispatch
  const dispatch = useDispatch();
  // lay id param
  let { id } = useParams<{ id: string }>();
  // call api
  let { ArrChiTietPhim } = useInfoChiTietPhim(id);
  console.log(ArrChiTietPhim);

  // useEffect(() => {
  //   return () => {
  //     dispatch(infoLichChieuAction.setChiTietPhim(undefined));
  //   };
  // }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${ArrChiTietPhim?.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div //custom card
        className="Glassmorphism"
        style={{ minHeight: "100vh", paddingTop: 150 }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={ArrChiTietPhim?.hinhAnh}
                alt="..."
                style={{ width: "100%", height: 300 }}
              />
              <div className="col-span-2 ml-5 mt-10">
                <p className="text-sm">
                  {moment(ArrChiTietPhim?.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl">{ArrChiTietPhim?.tenPhim}</p>
                <p>{ArrChiTietPhim?.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className={`c100 p${(ArrChiTietPhim?.danhGia || 0) * 10}`}>
              <span>{(ArrChiTietPhim?.danhGia || 0) * 10}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 mb-10 ml-52 w2/3 px-5 py-5 bg-white container"
          style={{ width: "70%", height: "auto" }}
        >
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch Chiếu" key="1">
              <div>
                <Tabs tabPosition={tabPosition}>
                  {ArrChiTietPhim?.heThongRapChieu.map((htr, i) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              className="rounded-full mr-2"
                              width={50}
                              src={htr.logo}
                              alt={htr.logo}
                            />
                            {htr.tenHeThongRap}
                          </div>
                        }
                        key={i}
                      >
                        {htr.cumRapChieu.map((cumRap, i) => {
                          return (
                            <div className="mt-5" key={i}>
                              <div className="flex flex-row">
                                <img
                                  width={50}
                                  height={50}
                                  src={cumRap.hinhAnh}
                                  alt={cumRap.hinhAnh}
                                />
                                <div className="ml-2">
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p className="mt-0 text-gray-400">
                                    {cumRap.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="thong-tin-lich-chieu grid grid-cols-4 mt-4">
                                {cumRap.lichChieuPhim
                                  .slice(0, 12)
                                  .map((lichChieu, i) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        className="col-span-1 text-green-800 font-bold"
                                        key={i}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông Tin" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Đánh Giá" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
