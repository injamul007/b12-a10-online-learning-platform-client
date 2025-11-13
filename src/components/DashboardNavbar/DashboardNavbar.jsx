import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import useAuth from "../../hook/useAuth";
import MyContainer from "../MyContainer/MyContainer";

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
            <NavLink to="/dashboard" className="hover:text-white">
              Dashboard
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
                <div className="hidden sm:flex items-center gap-3">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/bN9JNsZ/portfolio-course.jpg"
                    }
                    alt={user.displayName || user.email}
                    className="w-9 h-9 rounded-full border-2 border-white/10"
                  />
                  <div className="text-sm">
                    <div className="font-medium text-white/90">
                      {user.displayName || user.email.split("@")[0]}
                    </div>
                    <div className="text-xs text-white/60">Instructor</div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="ml-2 inline-flex items-center gap-2 bg-[#059669] hover:bg-[#F97316] cursor-pointer px-3 py-2 rounded-full text-sm font-semibold"
                >
                  <IoLogOut /> Logout
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default DashboardNavbar;
