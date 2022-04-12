import React from "react";

import { Link, NavLink } from "react-router-dom";
const TopNav = (props) => {
  return (
    <div
      id="top-nav"
      className="container-fluid d-flex   justify-content-between"
    >
      <nav id="top-left-nav">
        <ul className="justify-content-lg-center justify-content-md-center d-md-flex ">
          <li>
            <NavLink activeclassname="active" to="/">
            <i className="fa-solid fa-house"></i>
           
            </NavLink>
          </li>

          <li>
            <NavLink activeclassname="active" to="/todoapp">
              <i className="fa-solid fa-clipboard-list-check ml-2"></i>
              Todo
            </NavLink>
          </li>

          <li>
            <NavLink activeclassname="active" to="/char-genshin">
              <i className="fa-solid fa-spider-black-widow"></i>
              Char GI
            </NavLink>
          </li>
          <li>
          <NavLink activeclassname="active" to="/CountDown">
            <i className="fa-solid fa-timer"></i>
            CountDown
          </NavLink>
        </li>
        </ul>
      </nav>

      <nav className="top-right-nav justify-content-sm-center">
        <ul>
          <li>
            <a href="">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Đăng nhập
              </a>
          </li>
          <li>
            <a href="">
            <i className="fa-solid fa-user-plus"></i>
              Đăng ký
              </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
