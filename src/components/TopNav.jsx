import React from "react";

import { Link, NavLink } from "react-router-dom";
const TopNav  = (props)=> {




    return (
      <div
        id="top-nav"
        className="container-fluid d-flex   justify-content-between"
      >
        <nav id="top-left-nav">
          <ul className="justify-content-lg-center justify-content-md-center d-md-flex ">
            <li>
              <NavLink activeclassname="active" to="/">Home</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active"  to="/todoapp">Todo</NavLink>
            </li>

          
            <li>
              <NavLink activeclassname="active"  to="/char-genshin">Char GI</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="top-right-nav justify-content-sm-center">
          <ul>
            <li>
              <a href="">Đăng nhập</a>
            </li>
            <li>
              <a href="">Đăng ký</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  
}

export default TopNav;
