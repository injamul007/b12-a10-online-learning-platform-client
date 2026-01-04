import React from "react";
import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { BiBookAdd, BiBookAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineUnorderedList } from "react-icons/ai";

const DashboardSidebar = ({ onClose }) => {
  const baseLink =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition hover:bg-white/5";
  const activeClass = "bg-white/6 text-[#059669] font-semibold ring-1 ring-[#059669]/10";

  return (
    <aside className="bg-[#071422] text-white lg:w-72 w-52 h-full p-2 lg:p-4 lg:block">
      <title>SkilledHub || Dashboard</title>
      <nav className="space-y-3">
        <div className="text-xs text-white/60 uppercase mb-2">Dashboard</div>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <MdDashboard className="text-xl" />
          <span>Dashboard Overview</span>
        </NavLink>

        <NavLink
          to="/dashboard/my-enrolled"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <AiOutlineUnorderedList className="text-xl" />
          <span>My Enrolled</span>
        </NavLink>

        <NavLink
          to="/dashboard/add-course"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <BiBookAdd className="text-xl" />
          <span>Add Course</span>
        </NavLink>

        <NavLink
          to="/dashboard/my-courses"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <BiBookAlt className="text-xl" />
          <span>My Added Courses</span>
        </NavLink>

        <div className="border-t border-white/6 my-3"></div>

        <NavLink
          to="/dashboard/my-profile"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <AiOutlineUser className="text-xl" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <span className=" w-5 h-5 border rounded-sm text-xs flex items-center justify-center">⚙</span>
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;