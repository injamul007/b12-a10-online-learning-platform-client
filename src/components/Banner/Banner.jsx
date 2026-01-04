import React from "react";
import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../hook/useAuth";
import { motion } from "framer-motion";

const Banner = () => {
  const { user } = useAuth();

  const slides = [
    {
      img: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      tag: "Full Stack",
      title: "Build Dynamic Web Apps with MERN Stack",
      subtitle:
        "Master MongoDB, Express, React & Node.js — your complete path to becoming a full stack pro.",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/source/65626933112811.56a01870441f4.gif",
      tag: "Design",
      title: "Design That Inspires, Create That Matters",
      subtitle:
        "Learn UI/UX design from industry experts using Figma, Adobe XD, and design psychology.",
    },
    {
      img: "https://classroomclipart.com/image/content8/79386/thumb.gif",
      tag: "Data Science",
      title: "Turn Data into Insights with Python",
      subtitle:
        "Explore data analytics, visualization, and AI using Python, Pandas, and TensorFlow.",
    },
    {
      img: "https://digitalscholar.in/wp-content/uploads/2022/06/online-learning.gif",
      tag: "AI & ML",
      title: "Shape the Future with Artificial Intelligence",
      subtitle:
        "Learn machine learning, neural networks, and automation tools to innovate smarter solutions.",
    },
  ];

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
      <div className="carousel w-full lg:pt-19 md:pt-19 pt-16">
        {slides.map((slide, index) => (
          <div
            id={`slide${index + 1}`}
            key={index}
            className="carousel-item relative w-full"
          >
            <div className="bg-linear-to-br from-primary to-accent text-white py-20">
              <MyContainer>
                <div className="px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
                  <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-center">
                      {slide.title}{" "}
                    </h1>
                    <p className="text-lg text-center text-white/80 mb-6">
                      {slide.subtitle}
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to="/courses" className="my-btn transition-all">
                        Explore Courses
                      </Link>
                      {user && user.email ? (
                        ""
                      ) : (
                        <Link to="/register" className="my-btn">
                          Join Now
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex justify-center">
                    <img
                      src={slide.img}
                      alt={slide.tag}
                      className="w-3/4 h-96 lg:w-full rounded-xl"
                    />
                  </div>
                </div>
              </MyContainer>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? slides.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Banner;
