import React from "react";
import { useEffect } from "react";
import useAxios from "../../hook/useAxios";
import { useState } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import MyContainer from "../../components/MyContainer/MyContainer";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { motion } from "framer-motion"; // <-- added

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

  if (loading) return <LoadSpinner></LoadSpinner>;

  // motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <MyContainer>
        <title>SkilledHub || Courses</title>
        <h2 className="text-3xl text-center font-bold mt-6">All Courses</h2>
        <p className="text-center mb-10">Explore Latest Courses</p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coursesData.map((course) => (
            <motion.div key={course._id} variants={fadeUp}>
              <CourseCard course={course}></CourseCard>
            </motion.div>
          ))}
        </motion.div>
      </MyContainer>
    </div>
  );
};

export default Courses;
