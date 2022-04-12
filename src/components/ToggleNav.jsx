import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function ToggleNav() {
  return (
    <nav id="toggle-nav">
      <ul className="flex-column">
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
  );
}
