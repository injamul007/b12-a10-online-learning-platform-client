import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import MyContainer from "../MyContainer/MyContainer";
import navLogo from "../../assets/websiteLogo.png";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { ClockLoader } from "react-spinners";
import { IoPersonAdd } from 'react-icons/io5';

const Navbar = () => {
  const { user, setUser, loading, logOutUserFunc } = use(AuthContext);
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

  const handleLogOutUser = () => {
    logOutUserFunc()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut Successful",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "small-swal-popup",
          },
        });
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar shadow-sm glass-card">
      <MyContainer>
        <div className="flex justify-between items-center py-1">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-fit p-2 shadow absolute"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="flex items-center gap-1 font-extrabold text-2xl sm:text-3xl group select-none"
            >
              <p className="text-[#059669] group-hover:text-[#0EA5A4] transition-colors duration-300 flex items-center">
                <img className="w-8" src={navLogo} alt="navLogo" />
                Skilled
                <span className="text-[#F97316] relative transition-all duration-300 group-hover:scale-110">
                  Hub
                  {/* subtle glowing underline */}
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#F97316] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                </span>
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
          </div>
          <div className="navbar-end gap-3">
            {loading ? (
              <ClockLoader color="#059669" size={34} />
            ) : user ? (
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
                        user.photoURL ||
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
                    <li className="text-sm font-bold">{user.displayName}</li>
                    <li className="text-xs">{user.email}</li>
                  </div>
                  <li className="my-2">
                    <NavLink to={"/profile"}>
                      <FaUser /> Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOutUser}
                      className="btn btn-xs my-btn"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-sm my-btn">
                {" "}
                <IoLogIn /> Login
                </Link>
                <Link to={"/register"} className="btn btn-sm bg-[#F97316] text-white border-2 border-[#F97316] hover:bg-[#059669] hover:border-[#059669] duration-200 hover:-translate-y-px transition-all hidden lg:flex">
                {" "}
                <IoPersonAdd /> Register 
                </Link>
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
