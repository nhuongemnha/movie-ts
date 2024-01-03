import React, { Fragment } from "react";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import { Input, Space } from "antd";
import {
  useDSPhim,
  useSelectorDanhSachPhim,
} from "redux/store/QuanLyPhim/DanhSachPhim/dsPhim.selector";
import { arrFilm } from "@types";
import { NavLink } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface DataType {
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

type Props = {};

export default function Flims({}: Props) {
  let { arrFilm } = useDSPhim();
  let { arrFlimChange } = useSelectorDanhSachPhim();
  console.log(arrFlimChange);

  const columns: ColumnsType<DataType> = [
    {
      title: "maPhim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
      width: "10%",
    },
    {
      title: "hinhAnh",
      dataIndex: "hinhAnh",
      render: (text, flim, index) => {
        return (
          <Fragment>
            <img
              src={flim.hinhAnh}
              alt={flim.hinhAnh}
              width={50}
              height={50}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = `http://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "10%",
    },
    {
      title: "tenPhim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLocaleLowerCase().trim();
        let tenPhimB = b.tenPhim.toLocaleLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "moTa",
      dataIndex: "moTa",
      render: (text, flim) => {
        return (
          <Fragment>
            {flim.moTa.length > 250
              ? flim.moTa.substring(0, 250) + "..."
              : flim.moTa}
          </Fragment>
        );
      },
      width: "45%",
    },
    {
      title: "hanhDong",
      dataIndex: "hanhDong",
      render: (text, flim) => {
        return (
          <div className="text-center">
            <NavLink to="/" className="text-3xl text-white mr-2">
              <DeleteOutlined style={{ color: "red" }} />
            </NavLink>
            <NavLink
              to={`/admin/flims/edit/${flim.maPhim}`}
              className="text-3xl text-white"
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
          </div>
        );
      },
      width: "20%",
    },
  ];

  const data = arrFlimChange;

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <div>
      <h3 className="text-4xl">Quan Ly Phim</h3>
      <Button className="p-2 mb-3">Them Phim</Button>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        className="mb-5"
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
      ;
    </div>
  );
}
