import React, { useState, useEffect } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetchEnrolledCourses();
    }
  }, [user?.email]);

  const fetchEnrolledCourses = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/my-enrolled?email=${user?.email}`,
      );
      setEnrolledCourses(data || []);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      setEnrolledCourses([]);
    } finally {
      setLoading(false);
    }
  };

  // Calculate statistics
  const totalEnrolled = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(
    (course) => course.status === "completed",
  ).length;
  const ongoingCourses = enrolledCourses.filter(
    (course) => course.status !== "completed",
  ).length;

  return (
    <div className="min-h-screen bg-white dark:bg-[#1d232a] p-8">
      {/* Welcome Header */}
      <div className="mb-8 dark:bg-[#071422] shadow  p-4 rounded-lg">
        <h1 className="text-4xl font-bold dark:text-white text-gray-800">Welcome back, {user?.displayName || "Guest"}!</h1>
        <p className="text-gray-600 dark:text-white  mt-2">
          Here is your daily overview, you have <span className="text-orange-600">{ongoingCourses} ongoing</span> course to complete
        </p>
      </div>

      {/* Learning Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Courses Enrolled Card */}
        <div className="bg-white dark:bg-[#071422] p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-white text-sm font-semibold uppercase">
            Courses Enrolled
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {loading ? "..." : totalEnrolled}
          </p>
          <p className="text-gray-500 dark:text-white text-xs mt-1">Total enrolled courses</p>
        </div>

        {/* Completed Courses Card */}
        <div className="bg-white dark:bg-[#071422] p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-white text-sm font-semibold uppercase">
            Completed
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {loading ? "..." : completedCourses}
          </p>
          <p className="text-gray-500 dark:text-white text-xs mt-1">Finished courses</p>
        </div>

        {/* Ongoing Courses Card */}
        <div className="bg-white dark:bg-[#071422] p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-white text-sm font-semibold uppercase">
            Ongoing
          </h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            {loading ? "..." : ongoingCourses}
          </p>
          <p className="text-gray-500 dark:text-white text-xs mt-1">In progress courses</p>
        </div>
      </div>

      {/* Learning Progress Summary */}
      {!loading && enrolledCourses.length > 0 && (
        <div className="mt-8 bg-white dark:bg-[#071422] p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Learning Summary
          </h2>
          <p className="text-gray-600 dark:text-white">
            You have enrolled in {totalEnrolled} course
            {totalEnrolled !== 1 ? "s" : ""}. Keep up the great work!{" "}
            {completedCourses > 0 &&
              `You've completed ${completedCourses} course${completedCourses !== 1 ? "s" : ""} so far.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
