import React from "react";
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  render() {
    return (
      <div className="container">
        <nav id="top-nav">
          <ul>
            <li className="active">
              <Link  to="/">Home</Link>
            </li>

            <li>
              <Link  to="/todoapp">Todo</Link>
            </li>

            <li  >
              <Link   to="/about">About</Link>
            </li>
            <li>
              <Link   to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopNav;
