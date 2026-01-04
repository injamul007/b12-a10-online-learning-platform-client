import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FiClock, FiTag, FiDollarSign, FiChevronLeft } from "react-icons/fi";
import useAxios from "../../hook/useAxios";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { HiOutlineDocumentText } from "react-icons/hi";

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
        console.log(data.data);
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
    <MyContainer>
      <title>SkilledHub || Course Details</title>
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
                  <FiClock /> <span>{course?.durationInWeeks} Weeks</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <HiOutlineDocumentText className="text-lg text-primary" /> <span>{course?.lessons} Lessons</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <FiTag /> <span>{course?.category}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border text-primary">
                  <FiDollarSign />{" "}
                  <span className="font-semibold">
                    {course?.price ? `${course?.price}` : "Free"}
                  </span>
                </div>
              </div>

              <p className="text-sm mb-5">Created at: {course?.createdAt}</p>

              <p className="mb-5">{course?.description}</p>

              <div className="flex items-center gap-4">
                {user?.email ? <button
                  onClick={handleEnroll}
                  className="my-btn transition cursor-pointer"
                >
                  Enroll now
                </button> : <button disabled className="btn disabled:text-gray-600 disabled:dark:text-gray-200">Login to Enroll this Course</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
}
