import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { FiX } from "react-icons/fi";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import useAuth from "../hook/useAuth";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="min-h-screen  flex flex-col">
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>

        {/* Mobile sidebar */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 " onClick={() => setOpen(false)}></div>

            <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#071422] p-4 overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <span className="font-extrabold">Skilled<span className="text-[#F97316]">Hub</span></span>
                </Link>

                <button onClick={() => setOpen(false)} className="p-2 bg-white/5 rounded-md">
                  <FiX />
                </button>
              </div>

              <DashboardSidebar onClose={() => setOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-sm">Welcome back{user && `, ${user.displayName?.split(" ")[0] || ""}`} — manage your courses and students here.</p>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/courses" className="px-4 py-2 rounded-full bg-[#059669] hover:bg-[#0EA5A4] text-white lg:text-lg text-sm font-semibold">Browse Course</Link>
              </div>
            </div>

            <div className="space-y-6">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
