import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import useAuth from "../../hook/useAuth";
import MyContainer from "../MyContainer/MyContainer";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const DashboardNavbar = ({ onOpenSidebar }) => {
  const { user, logOutUserFunc } = useAuth();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("skilledub_theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    // apply theme to html as data-theme (works well with daisyUI)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("skilledhub_theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleLogout = async () => {
    try {
      await logOutUserFunc();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-linear-to-br from-[#061521] to-[#071422] text-white">
      <MyContainer>
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSidebar}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-md text-white bg-white/5 hover:bg-white/6 transition cursor-pointer"
            >
              <FiMenu />
            </button>

            <Link to="/" className="flex items-center gap-3">
              <span className="font-extrabold text-lg">
                <span className="text-[#E6FFF6]">Skilled</span>
                <span className="text-[#F97316]">Hub</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
            <NavLink to="/courses" className="hover:text-white">
              Courses
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-white/5 hover:bg-white/7 transition"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>

            {user ? (
              <>
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-full">
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
                    className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-fit p-2 shadow text-gray-700 dark:bg-[#303233] dark:text-gray-200"
                  >
                    <div className=" pb-3 border-b border-b-gray-200">
                      <li className="text-sm font-bold">{user.displayName}</li>
                      <li className="text-xs">{user.email}</li>
                    </div>
                    <li className="my-1">
                      <NavLink to={"/dashboard/my-profile"}>
                        <FaUser size={16} /> Profile
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink to={"/dashboard"}>
                        <MdDashboard size={20} /> Dashboard Home
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="btn btn-sm my-btn"
                      >
                        <IoLogOut size={20} /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
            <button onClick={handleLogout} className="btn my-btn lg:flex md:flex hidden">
              <IoLogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default DashboardNavbar;
