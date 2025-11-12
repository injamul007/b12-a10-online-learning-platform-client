// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router";
import { FiHeart, FiChevronRight } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function CourseCard({ course }) {

  const {_id, title, price, category,duration, imageURL, isFeatured } = course || {};

  const isFree = !price || Number(price) === 0;
  const priceLabel = isFree ? "Free" : `$${Number(price).toFixed(2)}`;

  return (
      <div
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 max-w-sm"
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
            className="text-md font-semibold text-gray-800 mb-2 line-clamp-1"
          >
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <HiOutlineDocumentText className="text-lg text-primary" />
              <span>Lessons</span>
            </div>

            {duration ? <span>{duration}</span> : null}
          </div>

          <div className="h-px bg-gray-100 my-3"></div>

          <div className="flex items-center justify-between">
            <div>
              <span className={`text-sm font-bold text-secondary`}>{priceLabel}</span>
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
