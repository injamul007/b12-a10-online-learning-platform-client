import React from "react";
import { useEffect } from "react";
import useAxios from "../../hook/useAxios";
import { useState } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import MyContainer from "../../components/MyContainer/MyContainer";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";

const Courses = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [coursesData, setCoursesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(11);
  const [totalPage, setTotalPage] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [sort, setSort] = useState("durationInWeeks");
  const [order, setOrder] = useState("desc");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const skip = currentPage * limit;
      axiosInstance
        .get(
          `/courses?limit=${limit}&skip=${skip}&sort=${sort}&order=${order}&search=${debouncedSearch}&filter=${filter}&price=${priceRange}`
        )
        .then((data) => {
          setCoursesData(data.data.result);
          setTotalCourses(data.data.totalCourses);
          setTotalPage(Math.ceil(data.data.totalCourses / limit));
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 600);
  }, [axiosInstance, currentPage, limit, sort, order, debouncedSearch, filter, priceRange]);

  const handleSorting = (e) => {
    const sortText = e.target.value;
    setSort(sortText.split("-")[0]);
    setOrder(sortText.split("-")[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0); // reset current page
  };

  const handleCategoryFilter = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
    setCurrentPage(0);
  };

  const handlePriceFilter = (e) => {
  setPriceRange(e.target.value);
  setCurrentPage(0);
  };


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
    <div className="pt-19">
      <MyContainer>
        <title>SkilledHub || Courses</title>
        <h2 className="text-3xl text-center font-bold mt-10">All Courses</h2>
        <p className="text-center mt-4 mb-14">
          Explore Latest Courses{" "}
          <span className="text-secondary">({totalCourses})</span>
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center mb-12 gap-4">
          <div>
            <select onChange={handleCategoryFilter} className="select">
              <option value={''}>
                Filter by Category
              </option>
              <option value={"web development"}>Web Development</option>
              <option value={"programming"}>Programming</option>
              <option value={"frontend development"}>
                Frontend Development
              </option>
              <option value={"backend development"}>Backend Development</option>
              <option value={"database"}>Database</option>
              <option value={"design"}>Design</option>
              <option value={"data science"}>Data Science</option>
              <option value={"ai-machine learning"}>
                AI & Machine Learning
              </option>
              <option value={"full stack"}>Full Stack</option>
              <option value={"backend-as-a-service"}>
                Backend-as-a-Service
              </option>
              <option value={"tools"}>Tools</option>
              <option value={"career development"}>Career Development</option>
              <option value={"devOps"}>DevOps</option>
              <option value={"state management"}>State Management</option>
            </select>
          </div>
          <div>
            <select
              onChange={handlePriceFilter}
              className="select"
            >
              <option value="">Filter by Price</option>
              <option value="0-30">Under $30</option>
              <option value="30-80">$30 - $80</option>
              <option value="80-120">$80 - $120</option>
              <option value="120-9999">$120+</option>
            </select>
          </div>
          <div>
            <label className="input">
              <IoSearchOutline size={20} />
              <input
                onChange={handleSearch}
                type="search"
                className="grow"
                placeholder="Search by Title"
              />
            </label>
          </div>
          <div>
            <select onChange={handleSorting} className="select">
              <option selected disabled>
                Sort by <span className="text-xs">P / D</span>
              </option>
              <option value={"price-desc"}>Price: High - Low</option>
              <option value={"price-asc"}>Price: Low - High</option>
              <option value={"durationInWeeks-desc"}>
                Duration: High - Low
              </option>
              <option value={"durationInWeeks-asc"}>
                Duration: Low - High
              </option>
            </select>
          </div>
        </div>

        {loading ? (
          <LoadSpinner></LoadSpinner>
        ) : coursesData.length === 0 &&  (searchText || priceRange || filter)  ? (
          <div className="text-center text-gray-500 my-20">
            <h3 className="text-2xl font-semibold">No course found 😕</h3>
            <p className="mt-2">Try searching or filtering with a different value</p>
          </div>
        ) : (
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
        )}

        {/* //? Pagination Buttons */}
        <div className="flex items-center justify-end gap-1 mb-14">
          {/* prev button */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`btn dark:bg-gray-700 ${currentPage < 1 && "hidden"}`}
          >
            Prev
          </button>
          {[...Array(totalPage)].keys().map((page) => (
            <button
              className={`btn dark:bg-gray-700 ${
                page === currentPage && "bg-primary dark:bg-primary hover:bg-green-500"
              }`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          {/* Next button */}
          {currentPage < totalPage - 1 && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="btn dark:bg-gray-700"
            >
              Next
            </button>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Courses;
