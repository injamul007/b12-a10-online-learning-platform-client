import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import MyContainer from "../../components/MyContainer/MyContainer";
import CourseCard from "../../components/courseCard/CourseCard";
import useAuth from "../../hook/useAuth";

const MyEnrolledCourse = () => {
  const {user} = useAuth();
  const axiosInstanceSecure = useAxiosSecure();
  const [myCourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    setTimeout(() => {
      axiosInstanceSecure
        .get(`/my-enrolled?email=${user.email}`)
        .then((data) => {
          setMyCourse(data.data);
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [user, axiosInstanceSecure]);

  if(loading) return <LoadSpinner></LoadSpinner>

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10">My Enrolled Course</h2>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {myCourse.map((course) => <CourseCard key={course._id} course={course}></CourseCard>)}
        </div>
      </MyContainer>
    </div>
  );
};

export default MyEnrolledCourse;
