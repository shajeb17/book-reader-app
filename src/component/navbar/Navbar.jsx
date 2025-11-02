import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  let menubar =  [
         <NavLink key="home" to={"/"}>Home</NavLink>,
         <NavLink key="book" to={"/BookList"}>Book List</NavLink>,
         <NavLink key="pages" to={"/PagesRead"}>Pages to Read</NavLink>
  ]
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
         <Link key="home" to={"/"} className="text-xl">Book reader </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[15px] space-x-5 font-medium">{menubar}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3.5">
        <button className="btn btn-primary">Sign up</button>
        <button className="btn btn-secondary">Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;
