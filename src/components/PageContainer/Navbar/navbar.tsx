import logo from "../../../assets/logo.png";
import { NavbarItems } from "./navbarItems";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow z-10">
      <div className="page-container navbar justify-between">
        <div className="navbar-start justify-between md:justify-normal w-[100%] md:w-[50%]">
          <div className="dropdown dropdown-end">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <NavbarItems />
            </ul>
          </div>
          <a className="flex-center font-medium text-xl flex pl-0" href="/">
            <img className="w-12 mr-1" src={logo} alt="logo" />
            <h1 className="hidden lg:block mb-1">Tech Vantage Consulting</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <NavbarItems />
          </ul>
        </div>
        <div className="navbar-end w-[0px] md:w-[50%]">
          <a
            href="#contact"
            className="btn custom-bg-button text-lg hidden md:inline-flex"
          >
            CONTACTENOS
          </a>
        </div>
      </div>
    </div>
  );
};
