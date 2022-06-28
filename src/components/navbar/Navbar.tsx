import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useState } from "react";
import "./Navbar.css";

const { Search } = Input;
const onSearch = (value: string) => {
  console.log(value);
};

// maybe have props as arg to pass down if logged in?
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar-container">
      <ul className="navbar-wrapper">
        <li className="navbar-left">
          <a href="#">Logo</a>
        </li>
        <li className="navbar-center">
          <a href="#">
            <Search placeholder="Search..." onSearch={onSearch} />
          </a>
        </li>
        <li className="navbar-right">
          <a href="#">Products</a>
          <a href="#">Contact</a>
          {isLoggedIn ? <a href="#">Profile</a> : <a href="#">Log In</a>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
