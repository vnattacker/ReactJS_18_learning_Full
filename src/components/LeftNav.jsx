import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ToggleNav from "./ToggleNav";
const Leftnav = () => {
  const [show, setShow] = useState(false);
  const handleToggleClick = () => {
    setShow(!show);
  };
  return (
    <div id="left-nav" className="container ">
      <nav className="top-right-nav d-flex">
       
        <button onClick={handleToggleClick} className="btn-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className="d-flex">
          <li>
            <NavLink activeclassname="active" to="/">
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Đăng nhập
            </a>
          </li>
          <li >
            <a href="">
              <i className="fa-solid fa-user-plus"></i>
              Đăng ký
            </a>
          </li>
        </ul>
      </nav>

      {show && <ToggleNav />}
    </div>
  );
};

export default Leftnav;
