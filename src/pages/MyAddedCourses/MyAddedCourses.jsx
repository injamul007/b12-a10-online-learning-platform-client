import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";
import MyCourseCard from "../MyCourseCard/MyCourseCard";
import useAxios from "../../hook/useAxios";
import Swal from "sweetalert2";

const MyAddedCourses = () => {
  const axiosInstanceSecure = useAxiosSecure();
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [myCourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    setTimeout(() => {
      axiosInstanceSecure
        .get(`/my-courses?email=${user.email}`)
        .then((data) => {
          setMyCourse(data.data);
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [user, axiosInstanceSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/courses/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              const remainingCourse = [...myCourse].filter((c) => c._id !== id);
              setMyCourse(remainingCourse);
              Swal.fire({
                title: "Deleted!",
                text: "Your Course has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error.message));
      }
    });
  };

  if (loading) return <LoadSpinner></LoadSpinner>;

  return (
    <div>
      <title>SkilledHub || My Added Course</title>
      <h2 className="text-3xl text-center font-bold mb-10">My Added Courses</h2>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {myCourse.map((course) => (
            <MyCourseCard
              key={course._id}
              course={course}
              handleDelete={handleDelete}
            ></MyCourseCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default MyAddedCourses;
