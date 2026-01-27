import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  FiClock,
  FiTag,
  FiDollarSign,
  FiChevronLeft,
  FiAward,
} from "react-icons/fi";
import useAxios from "../../hook/useAxios";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

export default function CourseDetails() {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const axiosInstanceSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get(`/courses/${id}`)
        .then((data) => {
          setCourse(data.data);
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
          setLoading(false);
        });
    }, 600);
  }, [id, axiosInstance]);

  const handleEnroll = () => {
    const finalCourseData = {
      title: course.title,
      imageURL: course.imageURL,
      price: course.price,
      duration: course.duration,
      category: course.category,
      description: course.description,
      isFeatured: course.isFeatured,
      instructor: {
        name: course.instructor.name,
        email: course.instructor.email,
        photo: course.instructor.photo,
      },
      createdAt: course.createdAt,
      enrolled_by: user.email,
    };

    axiosInstanceSecure
      .post("/my-enrolled", finalCourseData)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Enrolled Successful",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "small-swal-popup",
            },
          });
        }
      })
      .catch((error) => console.log(error.message));
  };

  if (loading) return <LoadSpinner></LoadSpinner>;

  return (
    <>
      <title>SkilledHub || Course Details</title>
      {/* Hero Section with Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 md:h-[500px] overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 mt-16 md:mt-20"
      >
        <img
          src={course?.imageURL}
          alt={course?.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

        {/* Back Button */}
        <MyContainer>
          <div className="absolute top-6 lg:left-10 left-6 right-0">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors duration-200 font-medium"
            >
              <FiChevronLeft size={18} /> Back to Courses
            </Link>
          </div>
        </MyContainer>

        {/* Featured Badge */}
        {course.isFeatured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 lg:right-12 right-6 px-4 py-2 rounded-full bg-secondary text-white text-xs font-bold shadow-lg"
          >
            ⭐ Featured
          </motion.div>
        )}
      </motion.div>

      <MyContainer className="py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            {/* Course Title */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {course?.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Master this course with expert guidance and practical learning
              </p>
            </div>

            {/* Instructor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                Instructor
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={course?.instructor?.photo}
                  alt={course?.instructor?.name}
                  className="w-16 h-16 rounded-full border-3 border-secondary"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.instructor?.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                    {course?.instructor?.email}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-2 text-secondary">
                  <FiClock size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {course?.durationInWeeks}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Weeks
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-2 text-secondary">
                  <HiOutlineDocumentText size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {course?.lessons}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Lessons
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-2 text-secondary">
                  <FiTag size={24} />
                </div>
                <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {course?.category}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Category
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-2 text-secondary">
                  <FiDollarSign size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {course?.price ? `$${course?.price}` : "Free"}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Price
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About This Course
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {course?.description}
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-secondary rounded p-4 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-secondary">
                    Created on:
                  </span>{" "}
                  {course?.createdAt}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Sidebar - Enrollment Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="sticky top-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
              {/* Price Display */}
              <div className="text-center mb-8">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
                  COURSE PRICE
                </p>
                <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {course?.price ? `$${course?.price}` : "Free"}
                </p>
              </div>

              {/* Enrollment Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {user?.email ? (
                  <button
                    onClick={handleEnroll}
                    className="w-full bg-linear-to-r from-secondary to-orange-500 hover:shadow-xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg mb-4 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 font-bold py-4 px-6 rounded-xl cursor-not-allowed text-lg mb-4"
                  >
                    Login to Enroll
                  </button>
                )}
              </motion.div>

              {/* Course Info Summary */}
              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <FiClock className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Duration
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course?.durationInWeeks} weeks
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <HiOutlineDocumentText
                      className="text-secondary"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Content
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course?.lessons} lessons
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <FiTag className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Category
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course?.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <FiAward className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Level
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course.isFeatured ? "Advanced" : "Beginner"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </>
  );
}
