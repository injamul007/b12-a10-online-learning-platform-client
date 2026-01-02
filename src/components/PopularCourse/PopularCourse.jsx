import React, { useEffect, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import useAxios from "../../hook/useAxios";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import CourseCard from "../courseCard/CourseCard";
import { motion } from "framer-motion";

const PopularCourse = () => {
  const axiosInstance = useAxios();
  const [popularCourse, setPopularCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get("/popular-courses")
        .then((data) => {
          setPopularCourse(data.data);
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [axiosInstance]);

  if (loading) return <LoadSpinner></LoadSpinner>;

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={fadeUp}
    >
      <div className="py-16 lg:py-26">
        <h2 className="text-4xl text-center font-bold mb-8">
          Popular Featured Courses
        </h2>

        <MyContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {popularCourse.map((pCourse) => (
              <motion.div
                key={pCourse._id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={pCourse}></CourseCard>
              </motion.div>
            ))}
          </div>
        </MyContainer>
      </div>
    </motion.div>
  );
};

export default PopularCourse;
