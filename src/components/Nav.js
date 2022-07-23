import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="heading">
        <h1>Main metrics</h1>
      </div>
      <div className="nav-links">
        <ul>
          <Link className="linking" to="/">
            <li>Last hour</li>
          </Link>
          <Link className="linking" to="today">
            <li>Today</li>
          </Link>
          <Link className="linking" to="yesterday">
            <li>Yesterday</li>
          </Link>
          <Link className="linking" to="today">
            <li>Last 3 days</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
