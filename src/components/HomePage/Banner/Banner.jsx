import React, { useState } from "react";
import { Link } from "react-router";
import MyContainer from "../../MyContainer/MyContainer";
import { motion } from "framer-motion";
import useAuth from "./../../../hook/useAuth";

const Banner = () => {
  const { user } = useAuth();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      title: "Build Dynamic Web Apps with MERN Stack",
      subtitle:
        "Master MongoDB, Express, React & Node.js — your complete path to becoming a full stack pro.",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/source/65626933112811.56a01870441f4.gif",
      title: "Design That Inspires, Create That Matters",
      subtitle:
        "Learn UI/UX design from industry experts using Figma, Adobe XD, and design psychology.",
    },
    {
      img: "https://classroomclipart.com/image/content8/79386/thumb.gif",
      title: "Turn Data into Insights with Python",
      subtitle:
        "Explore data analytics, visualization, and AI using Python, Pandas, and TensorFlow.",
    },
  ];

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full min-h-[60vh] max-h-[80vh] overflow-hidden"
    >
      <div
        className="w-full lg:h-[calc(100%-76px)] lg:pt-19 md:pt-19 pt-16 relative
                      md:h-[calc(100%-76px)] h-[calc(100%-76px)]"
      >
        <div
          className="w-full h-full bg-linear-to-br from-primary to-accent text-white flex items-center relative
                        md:flex-col md:justify-center md:gap-6"
        >
          <MyContainer>
            <div
              className="flex flex-col-reverse lg:flex-row items-center gap-10 py-10 lg:py-14
                            md:flex-col md:gap-6"
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left md:text-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
                  {slides[current].title}
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-6">
                  {slides[current].subtitle}
                </p>

                <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                  <Link to="/courses" className="my-btn">
                    Explore Courses
                  </Link>
                  {!user?.email && (
                    <Link to="/register" className="my-btn">
                      Join Now
                    </Link>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center md:mb-4">
                <img
                  src={slides[current].img}
                  alt="banner"
                  className="w-3/4 lg:w-full lg:max-h-[45vh] object-contain rounded-xl md:max-h-[30vh] max-h-28"
                />
              </div>
            </div>
          </MyContainer>

          {/* Scroll hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-white/70 text-xl">
            ↓
          </div>

          {/* Navigation buttons */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between">
            <button onClick={prevSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
