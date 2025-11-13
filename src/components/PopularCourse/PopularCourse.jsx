import React, { useEffect, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import useAxios from "../../hook/useAxios";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import CourseCard from "../courseCard/CourseCard";

const PopularCourse = () => {
  const axiosInstance = useAxios();
  const [popularCourse, setPopularCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axiosInstance
        .get("/popular-courses")
        .then((data) => {
          setPopularCourse(data.data)
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
          setLoading(false)
        });
    }, 1000);
  }, [axiosInstance]);

  if(loading) return <LoadSpinner></LoadSpinner>

  return (
    <div className="py-16 lg:py-26">
      <h2 className="text-4xl text-center font-bold mb-8">
        Popular Featured Courses
      </h2>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {
            popularCourse.map(pCourse => <CourseCard key={pCourse._id} course={pCourse}></CourseCard>)
          }
        </div>
      </MyContainer>
    </div>
  );
};

export default PopularCourse;
