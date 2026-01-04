import React from "react";
import Banner from "../../components/HomePage/Banner/Banner";
import WhyChooseUs from "../../components/HomePage/whyChoseUs/WhyChooseUs";
import PopularCourse from "../../components/HomePage/PopularCourse/PopularCourse";
import TopInstructors from "../../components/HomePage/TopInstructors/TopInstructors";
import { motion } from "framer-motion";
import FeaturesSection from "../../components/HomePage/FeaturesSection/FeaturesSection";
import CategoriesSection from "../../components/HomePage/CategoriesSection/CategoriesSection";
import StatisticsSection from "../../components/HomePage/StatisticsSection/StatisticsSection";
import TestimonialsSection from "../../components/HomePage/TestimonialsSection/TestimonialsSection";
import BlogSection from "../../components/HomePage/BlogSection/BlogSection";
import FAQSection from "../../components/HomePage/FAQSection/FAQSection";
import CTASection from "../../components/HomePage/CTASection/CTASection";

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
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
        <Banner />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
        <PopularCourse />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
        <TopInstructors />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
      <FeaturesSection></FeaturesSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
      <CategoriesSection></CategoriesSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
      <StatisticsSection></StatisticsSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
      <TestimonialsSection></TestimonialsSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5}}
        variants={fadeUp}
        >
        <BlogSection></BlogSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5}}
        variants={fadeUp}
      >
      <FAQSection></FAQSection>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
      <CTASection></CTASection>
      </motion.div>
    </div> 
  );
};

export default Home;
