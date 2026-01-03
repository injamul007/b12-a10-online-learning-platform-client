import React from "react";
import { useEffect } from "react";
import useAxios from "../../hook/useAxios";
import { useState } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import MyContainer from "../../components/MyContainer/MyContainer";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { motion } from "framer-motion";

const Courses = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [limit] = useState(11)
  const [totalPage, setTotalPage] = useState(0)
  const [totalCourses, setTotalCourses] = useState(0)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const skip = currentPage * limit
      axiosInstance
        .get(`/courses?limit=${limit}&skip=${skip}`)
        .then((data) => {
          setCoursesData(data.data.result);
          setTotalCourses(data.data.totalCourses)
          setTotalPage(Math.ceil(data.data.totalCourses / limit))
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 800);
  }, [axiosInstance,currentPage,limit]);

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
        <h2 className="text-3xl text-center font-bold mt-10">All Courses</h2>
        <p className="text-center mt-4 mb-14">Explore Latest Courses <span className="text-secondary">({totalCourses})</span></p>

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

          {/* //? Pagination Buttons */}
        <div className="flex items-center justify-end gap-1 mb-14">
          {/* prev button */}
          <button onClick={()=>setCurrentPage(currentPage-1)} className={`btn ${currentPage<1 && 'hidden'}`}>Prev</button>
          {[...Array(totalPage)].keys().map((page) => <button className={`btn ${page === currentPage && 'bg-primary hover:bg-green-500'}`} key={page} onClick={()=>setCurrentPage(page)}>{page+1}</button>)}
          {/* Next button */}
          {currentPage < totalPage-1 && <button onClick={()=>setCurrentPage(currentPage+1)} className="btn">Next</button>}
        </div>
      </MyContainer>
    </div>
  );
};

export default Courses;
