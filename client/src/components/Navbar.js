import React from "react";
import { Link } from "react-router-dom";

// For Basic setup only please change
const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/thingsDemo">
        <p>Things</p>
      </Link>
    </div>
  );
};

export default NavBar;
