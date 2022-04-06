import React from "react";
import { Link, NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';
class TopNav extends React.Component {




  render() {

    console.log("Top nav props: ",  this.context);
    return (
      <div
        id="top-nav"
        className="container-fluid d-flex   justify-content-between"
      >
        <nav id="left-nav">
          <ul className="justify-content-lg-center justify-content-md-center d-md-flex d-none">
            <li>
              <NavLink activeclassname="active" to="/">Home</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active"  to="/todoapp">Todo</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active"  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active"  to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="left-nav justify-content-sm-center">
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
}

export default TopNav;
