import React from "react";
import { Carousel } from "antd";
import { useBanner, useSelectorBanner } from "redux/store/QuanLyPhim";
import { useDispatch } from "react-redux";

type Props = {};

export default function HomeCarousel(props: Props) {
  
  const { imgBanner } = useBanner();
  console.log(imgBanner);

  // const { imgBanner } = useBanner();
  // console.log(imgBanner);

  const contentStyle: React.CSSProperties = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Carousel effect="fade">
      {imgBanner?.map((banner, i) => {
        return (
          <div key={i}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${banner.hinhAnh})`,
              }}
            >
              <img
                src={banner.hinhAnh}
                alt="..."
                className="w-full opacity-0"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
