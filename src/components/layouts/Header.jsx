import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "./../../redux/slices/authSlice";
import { authHelpers } from "./../../utils";
import Logo from "./../../assets/images/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = authHelpers.isAuthenticated();

  const user = isLoggedIn ? authHelpers.getUserFromCookies() : null;

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("user");
    Cookies.remove("accessToken");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Upperbar */}
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <NavLink to="/">
          <img
            className="cursor-pointer h-[100px] w-[150px]"
            src={Logo}
            alt="brand"
          />
        </NavLink>

        {/* Burger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Search */}
        <form className="hidden h-9 w-2/5 items-center border rounded-md md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-3 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="hidden w-11/12 outline-none md:block"
            type="search"
            placeholder="Search"
          />

          <button className="ml-auto h-full text-white bg-blue-400 px-4 font-semibold hover:bg-blue-500 transition duration-200 ease-in-out">
            Search
          </button>
        </form>

        <div className="hidden gap-3 md:flex">
          {/* Cart */}
          <NavLink
            to="/cart"
            className="flex cursor-pointer flex-col items-center justify-center"
          >
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/3d-fluency/94/shopping-cart.png"
              alt="shopping-cart"
            />

            <p className="text-xs">Cart</p>
          </NavLink>

          {/* Account */}
          {isLoggedIn ? (
            <NavLink
              to=""
              className="relative flex cursor-pointer flex-col items-center justify-center"
            >
              <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>

              <img
                width="26"
                height="26"
                src="https://img.icons8.com/3d-fluency/94/guest-male--v3.png"
                alt="guest-male--v3"
              />

              <p className="text-xs">
                {user.name.firstname} {user.name.lastname}
              </p>
            </NavLink>
          ) : null}
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative bg-sky-500/75 hover:bg-blue-400 transition duration-300 ease-in-out">
        <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
          <div className="mx-7 flex gap-8">
            <NavLink
              to="/"
              className="nav-link font-medium text-white duration-100 hover:bold hover:text-red-200"
            >
              Home
            </NavLink>

            <NavLink
              to=""
              className="nav-link font-medium text-white duration-100 hover:bold hover:text-red-200"
            >
              Products
            </NavLink>

            <NavLink
              to=""
              className="nav-link font-medium text-white duration-100 hover:bold hover:text-red-200"
            >
              About
            </NavLink>

            <NavLink
              to=""
              className="nav-link font-medium text-white duration-100 hover:bold hover:text-red-200"
            >
              Contact Us
            </NavLink>
          </div>

          {isLoggedIn ? (
            <div className="ml-auto flex gap-4 px-5">
              <NavLink to="/">
                <button
                  onClick={handleLogout}
                  className="items-center justify-center rounded font-medium text-center text-blue-500 bg-white border-white lg:border border-2 px-4 py-1 text-base transition duration-200 ease-in-out hover:bg-slate-100"
                >
                  Logout
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="ml-auto flex gap-4 px-5">
              <NavLink to="/login">
                <button className="items-center justify-center rounded font-medium text-center text-blue-500 bg-white border-white lg:border border-2 px-4 py-1 text-base transition duration-200 ease-in-out hover:bg-slate-100">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="items-center justify-center rounded font-medium text-center text-blue-500 bg-white border-white lg:border border-2 px-4 py-1 text-base transition duration-200 ease-in-out hover:bg-slate-100">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
