import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";

//setup redux
import { Provider } from "react-redux";
// setup antd
import "antd/dist/antd.css";

import "swiper/css/bundle";

import { store } from "./redux/store";

//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
