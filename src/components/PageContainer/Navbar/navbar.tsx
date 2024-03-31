import logo from "../../../assets/logo.png";
import { NavbarItems } from "./navbarItems";
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavbarItems />
          </ul>
        </div>
        {/* TODO: THIS SHOULD REDIRECTll */}
        <a
          className="flex-center font-medium text-xl flex pl-0"
          href="#page-container"
        >
          <img className="w-12 mr-1" src={logo} alt="logo" />
          <h1>Tech Vantage Consulting</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <NavbarItems />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn custom-bg-button text-lg">Contactar</a>
      </div>
    </div>
  );
};
