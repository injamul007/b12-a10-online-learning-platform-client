import React from "react";
import { Link } from "react-router";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const MyCourseCard = ({ course, handleDelete }) => {
  const { _id, title, price, imageURL, duration, category } = course || {};

  return (
    <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg shadow-gray-500 transform hover:-translate-y-1 transition-all duration-200 hover:border-white hover:border bg-white/3 backdrop-blur">
      {/* Image */}
      <img src={imageURL} alt={title} className="w-full h-44 object-cover" />

      {/* All Contents */}
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-3">{category}</p>
        <div className="flex justify-between items-center text-sm mb-3">
          <span>{duration}</span>
          <span className="font-semibold text-[#059669]">${price}</span>
        </div>

        <div className="h-px bg-gray-700/30 mb-3"></div>

        <div className="flex justify-between items-center">
          <Link
            to={`/courses/${_id}`}
            className="text-primary font-medium text-sm hover:text-[#059669]"
          >
            View
          </Link>
          <div className="flex gap-3">
            <Link
              to={`/dashboard/update-course/${_id}`}
              className="text-teal-500 hover:text-blue-600 text-lg"
              title="Edit"
            >
              <FiEdit2 />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-red-500 hover:text-red-700 text-lg cursor-pointer"
              title="Delete"
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
