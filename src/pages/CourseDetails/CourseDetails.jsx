import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FiClock, FiTag, FiDollarSign, FiChevronLeft } from "react-icons/fi";
import useAxios from "../../hook/useAxios";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";

export default function CourseDetails() {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

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
    }, 1000);
  }, [id, axiosInstance]);

  if (loading) return <LoadSpinner></LoadSpinner>;

  return (
    <MyContainer>
      <div className="px-4 py-10">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-[#059669] mb-6 hover:text-orange-600"
        >
          <FiChevronLeft /> Back to Courses
        </Link>

        <div className="bg-linear-to-br from-white/3 to-white/2 rounded-2xl overflow-hidden shadow-2xl">
          <div className="md:flex">
            {/* Left side image */}
            <div className="md:w-1/2 relative">
              <img
                src={course?.imageURL}
                alt={course?.title}
                className="w-full lg:h-90 object-cover"
              />

              {course.isFeatured && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F97316] text-white text-xs font-semibold shadow">
                  Featured
                </div>
              )}

              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-3">
                <img
                  src={course?.instructor?.photo}
                  alt={course?.instructor?.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="text-white text-sm">
                  <div className="font-semibold">{course.instructor?.name}</div>
                  <div className="text-xs opacity-80">
                    {course?.instructor?.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side details */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
                {course?.title}
              </h1>

              <div className="flex items-center flex-wrap gap-2 lg:gap-4 text-sm mb-4">
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <FiClock /> <span>{course?.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <FiTag /> <span>{course?.category}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <FiDollarSign />{" "}
                  <span className="font-semibold">
                    {course?.price ? `$${course?.price}` : "Free"}
                  </span>
                </div>
              </div>

              <p className="text-sm mb-5">
                Created at: {course?.createdAt}
              </p>

              <p className="mb-5">{course?.description}</p>

              <div className="flex items-center gap-4">
                <button
                  // onClick={handleEnroll}
                  className="my-btn transition cursor-pointer"
                >
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
}
