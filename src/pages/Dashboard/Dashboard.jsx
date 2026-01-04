import React from "react";
import useAuth from "../../hook/useAuth";

const Dashboard = () => {
  const {user} = useAuth()
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text">
            Welcome back{user && `, ${user?.displayName || ""}`} — manage your
            courses and students here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
