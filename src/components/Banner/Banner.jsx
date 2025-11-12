import React from "react";
import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../hook/useAuth";

const Banner = () => {
  const { user } = useAuth();

  const slides = [
    {
      img: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      tag: "Full Stack",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/source/65626933112811.56a01870441f4.gif",
      tag: "Design",
    },
    {
      img: "https://classroomclipart.com/image/content8/79386/thumb.gif",
      tag: "Data Science",
    },
    {
      img: "https://digitalscholar.in/wp-content/uploads/2022/06/online-learning.gif",
      tag: "AI & ML",
    },
  ];

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          id={`slide${index + 1}`}
          key={index}
          className="carousel-item relative w-full"
        >
          {/* Banner content */}
          <div className="bg-linear-to-br from-primary to-accent text-white py-20">
            <MyContainer>
              <div className="px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left Text */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-center">
                    Empower Your Learning Journey with{" "}
                    <span className="text-secondary">SkilledHub</span>
                  </h1>
                  <p className="text-lg text-center text-white/80 mb-6">
                    Discover expert-led online courses in technology, design,
                    and business. Start learning today and shape your future
                    with confidence.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link to="/courses" className="my-btn transition-all">
                      Explore Courses
                    </Link>
                    {/* conditional join btn depend on user state */}
                    {user && user.email ? (
                      ""
                    ) : (
                      <Link to="/register" className="my-btn">
                        Join Now
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Image */}
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

          {/* Carousel navigation */}
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
  );
};

export default Banner;
