import React from "react";
import MyContainer from "../../components/MyContainer/MyContainer";

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 lg:pt-28 md:pt-28 pt-24">
      <MyContainer>
        <div className="px-6 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About SkilledHub
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              SkilledHub is a modern learning platform designed to help learners
              build practical, job-ready skills through structured and focused
              online courses.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our mission is to make skill-based learning accessible, simple,
                and effective. We focus on practical knowledge that helps
                learners grow with confidence and move closer to real-world
                opportunities.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We aim to bridge the gap between learning and real-world
                application by providing a clean, learner-focused platform that
                supports continuous growth.
              </p>
            </div>

            {/* Right Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Why Choose SkilledHub?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Skill-focused courses designed for real-world use
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personalized dashboard for enrolled courses and progress
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Secure and user-friendly learning experience
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fully responsive design for all devices
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default AboutUs;
