import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export type Props = {};

export default function Header(props: Props) {
  let history = useHistory();

  const { t, i18n } = useTranslation();

  const { Option } = Select;

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    console.log(value);
  };

  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-zinc-600/40 fixed w-full z-10 ">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <img
            className="logo-img-sticky site-logo-img-sticky"
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="CyberLearn - Học lập trình trực tuyến"
            title="Học lập trình rành nghề"
          ></img>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className=" flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 hover:text-yellow-500 border-none"
              activeClassName="text-yellow-500"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent border-none hover:text-yellow-500"
              activeClassName="text-yellow-500"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/new"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent border-none hover:text-yellow-500"
              activeClassName="text-yellow-500"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button
            className="self-center px-8 py-3 rounded"
            onClick={() => {
              history.push("/login");
            }}
          >
            {t("signin")}
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          <Select
            defaultValue="en"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="vie">VN</Option>
            <Option value="chi">chi</Option>
            <Option value="en">en</Option>
          </Select>
        </div>
      </div>
    </header>
  );
}
