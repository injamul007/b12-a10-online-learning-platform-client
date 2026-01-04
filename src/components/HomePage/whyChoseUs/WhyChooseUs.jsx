import React from "react";
import {
  FaChalkboardTeacher,
  FaCertificate,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
import MyContainer from "../../MyContainer/MyContainer";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  // motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <MyContainer>
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Why SkilledHub?
            </h2>
            <p className="mt-3 ">
              Hands-on courses, professional instructors, and project-based
              learning — ensuring your rapid career growth.
            </p>
          </div>

          {/* Cards with motion */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-white"
              variants={fadeUp}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#059669]/10 text-[#059669] text-xl mb-4 ">
                <FaChalkboardTeacher />
              </div>
              <h3 className="font-semibold mb-2">Industry Experts</h3>
              <p className="text-sm ">
                Get real-world guidance and code-based lessons from experienced
                instructors.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-white"
              variants={fadeUp}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#F97316]/10 text-[#F97316] text-xl mb-4">
                <FaRocket />
              </div>
              <h3 className="font-semibold mb-2">Project-based</h3>
              <p className="text-sm">
                Each course includes projects — helping you build your
                portfolio.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-white"
              variants={fadeUp}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#0EA5A4]/10 text-[#0EA5A4] text-xl mb-4">
                <FaCertificate />
              </div>
              <h3 className="font-semibold mb-2">Certificate</h3>
              <p className="text-sm">
                Get a certificate after completing the course — perfect for
                showcasing on your CV or LinkedIn.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-white"
              variants={fadeUp}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#071422]/5 text-xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-sm">
                An active community for questions and problems — you’re not
                alone.
              </p>
            </motion.div>
          </motion.div>

          <div className="text-center mt-10">
            <a
              href="/courses"
              className="inline-block px-6 py-3 rounded-full bg-[#059669] hover:bg-[#0EA5A4] text-white cursor-pointer font-semibold transition"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </MyContainer>
  );
};

export default WhyChooseUs;
