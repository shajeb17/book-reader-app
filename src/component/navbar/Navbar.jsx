import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="text-xl">Book reader</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a> Listed Books</a>
          </li>
          <li>
            <a>Pages to Read</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3.5">
        <button className="btn btn-primary">Sign up</button>
        <button className="btn btn-secondary">Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;
