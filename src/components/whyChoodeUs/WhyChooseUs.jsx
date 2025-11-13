import React from "react";
import {
  FaChalkboardTeacher,
  FaCertificate,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-26 bg-linear-to-br from-[#f8faf9] to-white"> 
      <title>SkilledHub || Why Choose Us</title>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#071422]">
            Why SkilledHub?
          </h2>
          <p className="mt-3 text-gray-600">
            Hands-on courses, professional instructors, and project-based learning — ensuring your rapid career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#059669]/10 text-[#059669] text-xl mb-4">
              <FaChalkboardTeacher />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Industry Experts
            </h3>
            <p className="text-sm text-gray-600">
              Get real-world guidance and code-based lessons from experienced instructors.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#F97316]/10 text-[#F97316] text-xl mb-4">
              <FaRocket />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Project-based</h3>
            <p className="text-sm text-gray-600">
              Each course includes projects — helping you build your portfolio.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#0EA5A4]/10 text-[#0EA5A4] text-xl mb-4">
              <FaCertificate />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Certificate</h3>
            <p className="text-sm text-gray-600">
              Get a certificate after completing the course — perfect for showcasing on your CV or LinkedIn.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#071422]/5 text-[#071422] text-xl mb-4">
              <FaHandsHelping />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Community Support
            </h3>
            <p className="text-sm text-gray-600">
              An active community for questions and problems — you’re not alone.
            </p>
          </div>
        </div>

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
  );
}

export default WhyChooseUs;