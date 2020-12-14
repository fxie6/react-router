import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Home</h1>
      </Link>
      <ul className="navBar-link">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
