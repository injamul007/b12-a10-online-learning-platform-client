import React, { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router";
import pageNotFoundDashboard from "../../assets/dashBoardError.png";
import MyContainer from "../../components/MyContainer/MyContainer";

const ErrorPageDashboard = () => {
  const error = useRouteError();
  const [theme] = useState(
    () => localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <title>SkilledHub || Error-404</title>
      <MyContainer>
        <div className={theme === "dark" ? "min-h-screen bg-[#1d232a] text-gray-100 flex items-center justify-center flex-col" : "min-h-screen bg-white text-gray-900 flex items-center justify-center flex-col"}>
          <img className="lg:w-fit w-80" src={pageNotFoundDashboard} alt="error_img" />
          <h1 className="text-center text-4xl font-bold">
            Oops, Page Not Found
          </h1>
          <p className="text-gray-400 my-3">
            The page you are looking for is not available.
          </p>
          <div className="pb-3 text-gray-300">{error.message}</div>
          <Link to={"/dashboard"}>
            <button
              className="btn bg-linear-to-r from-[#059669] to-[#0ea5a4] text-white px-6 hover:shadow-[2px_4px_6px_rgba(78,77,77,0.5),-2px_-4px_6px_rgba(65,64,64,0.6)]
             hover:bg-linear-to-r hover:from-[#0ea5a4] hover:to-[#059669]
             transition-all duration-300"
            >
              Back to DashBoard!
            </button>
          </Link>
        </div>
      </MyContainer>
    </>
  );
};

export default ErrorPageDashboard;
