import React from "react";
import { useEffect } from "react";
import useAxios from "../../hook/useAxios";
import { useState } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import MyContainer from "../../components/MyContainer/MyContainer";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

const Courses = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get("/courses")
        .then((data) => {
          setCoursesData(data.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [axiosInstance]);

  if (loading) return <LoadSpinner></LoadSpinner>

  return (
    <div>
      <MyContainer>
        <title>SkilledHub || Courses</title>
        <h2 className="text-3xl text-center font-bold mt-6">All Courses</h2>
        <p className="text-center mb-10">Explore Latest Courses</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {coursesData.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Courses;
