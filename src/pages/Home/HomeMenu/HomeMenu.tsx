import React, { Fragment, useEffect, useState } from "react";
import { Tabs, Radio, Space, RadioChangeEvent } from "antd";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { ArrLichChieu } from "@types";

const { TabPane } = Tabs;

type Props = {
  ArrLichChieu: ArrLichChieu[] | undefined;
};
// lấy các thuộc tính cần lấy thông qua hàm map và pick trong lodash

type useState = {
  tabPosition: any;
};

export default function HomeMenu(props: Props) {
  let { ArrLichChieu } = props;

  const [state, setState] = useState<useState>({
    tabPosition: "left",
  });

  const changeTabPosition = (e: RadioChangeEvent) => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;

  // render
  let renderRap = () => {
    return ArrLichChieu?.map((rap, i) => {
      return (
        <TabPane
          tab={
            <img
              className="rounded-full"
              width={50}
              src={rap.logo}
              alt={rap.logo}
            />
          }
          key={i}
        >
          <Tabs tabPosition={tabPosition}>
            {rap.lstCumRap?.map((cumRap, i) => {
              return (
                <TabPane
                  key={i}
                  tab={
                    <div className="flex justify-center items-center flex-wrap">
                      <img
                        className="rounded-full"
                        width={50}
                        src={cumRap.hinhAnh}
                        alt={cumRap.hinhAnh}
                      />
                      <div
                        style={{ width: "280px" }}
                        className="flex justify-center items-start flex-col ml-4"
                      >
                        <p className="mb-0">{cumRap.tenCumRap}</p>
                        <span className="text-red-500">Chi Tiết</span>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.map((phim, i) => {
                    return (
                      <div className="flex py-4 border-b-4" key={i}>
                        <img
                          width={100}
                          src={phim.hinhAnh}
                          alt={phim.hinhAnh}
                          onError={(e) => (
                            (e.currentTarget.onerror = null),
                            (e.currentTarget.src = "http://picsum.photos/200")
                          )}
                        />
                        <div className="ml-3">
                          <h1 className="text-2xl">{phim.tenPhim}</h1>
                          <span className="mb-8">{cumRap.diaChi}</span>
                          <div className="grid grid-cols-8 gap-6 mt-2">
                            {phim.lstLichChieuTheoPhim
                              .slice(0, 18)
                              .map((lich, i) => {
                                return (
                                  <NavLink
                                    className="text-lg text-green-500"
                                    to="/"
                                    key={i}
                                  >
                                    {moment(lich.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs tabPosition={tabPosition}>{renderRap()}</Tabs>
    </div>
  );
}
