
import React from "react";
import { Link, NavLink } from "react-router-dom";
import helo from "../assets/heroo.png";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-semibold ${
      isActive
        ? "text-cyan-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="relative z-50 w-full border-b
      border-indigo-400/20 bg-[#030712] text-white">

      {/* Cosmic background glow */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_50%_0%,rgba(79,70,229,0.18),transparent_65%)]">
      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap
        items-center justify-between gap-4 px-5 py-4
        lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={helo}
            alt="ShyamSpaceX Logo"
            className="h-12 w-20 object-contain"
          />

          <span className="text-lg font-black tracking-wide sm:text-xl">
            <span className="text-indigo-400">SHYAM</span>SPACEX
          </span>
        </Link>

        {/* Navigation links */}
        <ul className="order-3 flex w-full flex-wrap
          items-center justify-center gap-x-5 gap-y-4
          border-t border-white/10 pt-4
          sm:gap-x-8 md:order-none md:w-auto
          md:border-0 md:pt-0 lg:gap-x-9">

          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/createusers" className={navLinkClass}>
              Create Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/allusers" className={navLinkClass}>
              All Users
            </NavLink>
          </li>
        </ul>

        {/* Login button */}
        <Link
          to="/login"
          className="shrink-0 rounded-lg border
            border-indigo-400/40 bg-indigo-600 px-5 py-2.5
            text-sm font-bold text-white hover:bg-indigo-500"
        >
          Login →
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;
