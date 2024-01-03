import { PlayCircleOutlined } from "@ant-design/icons";
import { arrFilm } from "@types";
import React from "react";
import { useHistory } from "react-router-dom";

import "../../../assets/scss/Components/Flim/Film_Slip.scss";

type Props = {
  phim: arrFilm;
};

export default function Film_Slip(props: Props) {
  // console.log(props);
  let { hinhAnh, tenPhim, maPhim } = props.phim;

  let history = useHistory();

  return (
    <div className="flip-card mt-2" style={{ height: "390px" }}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front setupBgImg"
          style={{ backgroundImage: `url(${hinhAnh})` }}
        >
          <img
            className="w-full opacity-0"
            src="http://picsum.photos/200"
            alt="Avatar"
            style={{ width: "100%", height: "100%" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage: `url(${hinhAnh})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              className="w-full opacity-0"
              src="http://picsum.photos/200"
              alt="Avatar"
              style={{ width: 300, height: 400 }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl mt-2 font-bold">{tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          history.push(`/detail/${maPhim}`);
        }}
        className="bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
