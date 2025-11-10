import React from "react";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
// import { ImBoxAdd } from "react-icons/im";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import MyContainer from "../MyContainer/MyContainer";
import navLogo from "../../assets/website_logo.png"

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <GoHomeFill />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>
          <TiContacts /> Courses
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>
          <MdDashboard /> Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm glass-card">
      <MyContainer>
        <div className="flex justify-between items-center py-0 min-h-0 z-1">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              to={"/"}
              className="flex items-center gap-1 text-xl font-bold text-[#059669]"
            >
            <img className="w-8" src={navLogo} alt="navLogo" /> 
            <p className="text-[#059669]">Skilled<span className="text-[#F97316]">Hub</span></p>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
          </div>
          <div className="navbar-end gap-3">
            {/* {user ? ( */}
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      // user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  {/* <li className="text-sm font-bold">{user.displayName}</li> */}
                  {/* <li className="text-xs">{user.email}</li> */}
                </div>
                <li className="mt-3">
                  <NavLink to={"/profile"}>
                    <FaUser /> Profile
                  </NavLink>
                </li>
                {/* <li>
              <NavLink to={"/my-models"}>
                <IoLogoModelS /> My Models
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-downloads"}>
                <IoLogoModelS /> My Downloads
              </NavLink>
            </li> */}
                {/* <div className="my-1 ml-2">
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
              </div> */}
                <li>
                  <button
                    // onClick={signOutUser}
                    className="btn btn-xs my-btn"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
            {/* ) : ( */}
            <Link to={"/auth/login"} className="btn btn-sm my-btn">
              {" "}
              <IoLogIn /> Login
            </Link>
            {/* )} */}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
