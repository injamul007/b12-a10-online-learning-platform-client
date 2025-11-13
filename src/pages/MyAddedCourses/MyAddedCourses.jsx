import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";
import CourseCard from "../../components/courseCard/CourseCard";

const MyAddedCourses = () => {
  const axiosInstanceSecure = useAxiosSecure();
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

  if (loading) return <LoadSpinner></LoadSpinner>;

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-10">My Added Courses</h2>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {myCourse.map((mCourse) => (
            <CourseCard key={mCourse._id} course={mCourse}></CourseCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default MyAddedCourses;
