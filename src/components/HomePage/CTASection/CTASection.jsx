import React from "react";
import { Link } from "react-router";
import useAuth from "../../../hook/useAuth";
import MyContainer from "../../MyContainer/MyContainer";

const CTASection = () => {
  const { user } = useAuth();
  return (
    <section className="lg:py-22 py-16 bg-accent dark:bg-[#212224] text-white mb-18">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="mb-6 text-white/80">
            Join SkilledHub and boost your skills today!
          </p>
          {user && user?.email ? (
            <button
              disabled
              className="btn disabled:bg-primary disabled:text-white"
            >
              Already Joined
            </button>
          ) : (
            <Link
              to="/register"
              className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Join Now
            </Link>
          )}
        </div>
      </MyContainer>
    </section>
  );
};

export default CTASection;
