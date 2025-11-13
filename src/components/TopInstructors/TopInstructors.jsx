import React from "react";
import { FaStar, FaTwitter, FaLinkedin } from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";

const INSTRUCTORS = [
  {
    id: 1,
    name: "Md. Rahim",
    title: "Senior MERN Instructor",
    avatar: "https://i.ibb.co/bN9JNsZ/portfolio-course.jpg",
    bio: "5+ years building production MERN apps. Projects, tips and career guidance.",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Ayesha Khan",
    title: "UI/UX & Product Designer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    bio: "Design systems, prototyping and product thinking.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sajid Ahmed",
    title: "Machine Learning Engineer",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    bio: "ML pipelines, TensorFlow and real-world AI projects.",
    rating: 4.7,
  },
];

const TopInstructors = () => {
  return (
    <MyContainer>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Top Instructors
            </h2>
            <p className="mt-3">
              Skilled professionals with real-world experience — who will teach
              you practical coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTRUCTORS.map((ins) => (
              <article
                key={ins.id}
                className=" rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition hover:border hover:border-white"
              >
                <img
                  src={ins.avatar}
                  alt={ins.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white -mt-12 shadow"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{ins.name}</h3>
                  <p className="text-sm text-[#059669]/90 font-medium">
                    {ins.title}
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 text-sm text-yellow-500">
                      <FaStar /> <strong>{ins.rating}</strong>
                    </span>
                  </div>
                  <p className="text-sm mt-3">{ins.bio}</p>

                  <div className="flex items-center justify-center gap-3 mt-4">
                    <a
                      href="#"
                      className="p-2 rounded-full hover:bg-white transition"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full hover:bg-white transition"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/courses"
              className="inline-block px-6 py-3 rounded-full bg-[#F97316] hover:bg-[#fb8a4b] text-white font-semibold transition"
            >
              See All Instructors
            </a>
          </div>
        </div>
      </section>
    </MyContainer>
  );
};

export default TopInstructors;
