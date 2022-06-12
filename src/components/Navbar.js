import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <li className="welcome">
          <Link to="/">Welcome</Link>{" "}
        </li>
        <li className="login">
          <Link to="/login">Login</Link>{" "}
        </li>
        <li>
          <Link to="/user">Users</Link>{" "}
        </li>
        <li>
          <Link to="/harbour">Harbours</Link>{" "}
        </li>
        <li>
          <Link to="/boat">Boats</Link>{" "}
        </li>
        {/* <li className='data'><Link to="/data">Data</Link></li> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
