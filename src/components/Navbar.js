import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = ({ username }) => {
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
          <Link to={`/tenant/${username}`}>Tenants</Link>{" "}
        </li>
        <li>
          <Link to={`/createtenant`}>Create Tenant</Link>{" "}
        </li>
        <li>
          <Link to={`/createrental`}>Create Rental</Link>{" "}
        </li>
        <li>
          <Link to={`/createhouse`}>Create House</Link>{" "}
        </li>
        <li>
          <Link to={`/house`}>Houses</Link>{" "}
        </li>
        {/* <li className='data'><Link to="/data">Data</Link></li> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
