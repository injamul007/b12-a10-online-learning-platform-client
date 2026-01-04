import React from "react";
import Banner from "../../components/HomePage/Banner/Banner";
import WhyChooseUs from "../../components/HomePage/whyChoseUs/WhyChooseUs";
import PopularCourse from "../../components/HomePage/PopularCourse/PopularCourse";
import TopInstructors from "../../components/HomePage/TopInstructors/TopInstructors";
import { motion } from "framer-motion";

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <title>SkilledHub || Home</title>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <Banner />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <PopularCourse />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <TopInstructors />
      </motion.div>
    </div>
  );
};

export default Home;
