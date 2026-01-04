import React from "react";
import { Link } from "react-router";
import { FiHeart, FiChevronRight } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function CourseCard({ course }) {

  const {_id, title, price, category, durationInWeeks, lessons, imageURL, isFeatured } = course || {};

  return (
      <div
        className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md shadow-gray-500 transform hover:-translate-y-1 transition-all duration-300 dark:bg-[#212224]"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-44 object-cover"
            loading="lazy"
          />

          {/* category badge */}
          <span
            className={`absolute left-3 top-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
            ${
              isFeatured
                ? "bg-primary text-white"
                : "bg-secondary text-white"
            }`}
          >
            {category}
          </span>

          {/* favorite button */}
          <button
            className="absolute right-3 top-3 p-2 rounded-lg bg-white/90 text-gray-800 hover:scale-105 transition"
            title="Add to favorites"
          >
            <FiHeart />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 pt-6">
          <h3
            className="text-md font-semibold mb-2 line-clamp-1"
          >
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <HiOutlineDocumentText className="text-lg text-primary" />
              <span>{lessons} Lessons</span>
            </div>

            {durationInWeeks ? <span>{durationInWeeks} Weeks</span> : null}
          </div>

          <div className="h-px bg-gray-100 my-3"></div>

          <div className="flex items-center justify-between">
            <div>
              <span className={`text-sm font-bold text-secondary`}>$ {price}</span>
            </div>

            <Link
              to={`/courses/${_id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition"
              aria-label={`View details for ${title}`}
            >
              View Details <FiChevronRight />
            </Link>
          </div>
        </div>
      </div>
  );
}
