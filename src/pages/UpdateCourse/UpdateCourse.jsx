import React from "react";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateCourse = () => {
  const data = useLoaderData();
  const course = data;
  const axiosInstanceSecure = useAxiosSecure();

  const handleUpdate = (e) => {
    e.preventDefault();

    const isFeaturedStr = e.target.isFeatured.value.toLowerCase();

    const formData = {
      title: e.target.title.value,
      imageURL: e.target.imageURL.value,
      price: Number(e.target.price.value),
      durationInWeeks: Number(e.target.durationInWeeks.value),
      lessons: Number(e.target.lessons.value),
      category: e.target.category.value,
      description: e.target.description.value,
      isFeatured: isFeaturedStr === "true",
      instructor: {
        name: e.target.name.value,
        email: e.target.email.value,
        photo: e.target.photoURL.value
      },
      updatedAt: new Date().toISOString(),
    };

    axiosInstanceSecure
      .patch(`/courses/${course._id}`, formData)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Successfully",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "small-swal-popup",
            },
          });
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <title>SkilledHub || Update Course</title>
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Your Course
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Title Field & Category */}
          <div className="flex items-center gap-2">
            <div>
              <label className="label font-medium">Title</label>
              <input
                defaultValue={course.title}
                type="text"
                name="title"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Course title"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={course.category}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Programming">Programming</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="Database">Database</option>
                <option value="Design">Design</option>
                <option value="Data Science">Data Science</option>
                <option value="AI & Machine Learning">
                  AI & Machine Learning
                </option>
                <option value="Full Stack">Full Stack</option>
                <option value="Backend-as-a-Service">
                  Backend-as-a-Service
                </option>
                <option value="Tools">Tools</option>
                <option value="Career Development">Career Development</option>
                <option value="DevOps">DevOps</option>
                <option value="State Management">State Management</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={course.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-20"
              placeholder="Course description"
            ></textarea>
          </div>

          {/* Image URL */}
            <div>
              <label className="label font-medium">Image URL</label>
              <input
                defaultValue={course.imageURL}
                type="url"
                name="imageURL"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Price & isFeatured */}
            <div className="flex items-center gap-2">
              <div>
              <label className="label font-medium">Price</label>
              <input
                defaultValue={course.price}
                type="text"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="$123"
              />
            </div>
            <div>
              <label className="label font-medium">isFeatured</label>
              <input
                defaultValue={course.isFeatured}
                type="text"
                name="isFeatured"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Boolean"
              />
            </div>
            </div>

          {/* Duration & lesson */}
          <div className="flex items-center gap-2">
            <div>
              <label className="label font-medium">Duration In Weeks</label>
              <input
                defaultValue={course.durationInWeeks}
                type="text"
                name="durationInWeeks"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Duration In Weeks"
              />
            </div>
            <div>
              <label className="label font-medium">Lessons</label>
              <input
                defaultValue={course.lessons}
                type="text"
                name="lessons"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="lessons"
              />
            </div>
          </div>

          {/* instructor info */}
          <div className="flex items-center gap-2">
            <div>
              <label className="label font-medium">Instructor Name</label>
              <input
                type="text"
                defaultValue={course.instructor.name}
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Duration"
              />
            </div>
            <div>
              <label className="label font-medium">Instructor Email</label>
              <input
                type="email"
                defaultValue={course.instructor.email}
                name="email"
                readOnly
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="boolean"
              />
            </div>
          </div>

          <div>
            <label className="label font-medium">Instructor Photo</label>
            <input
              type="url"
              defaultValue={course.instructor.photo}
              name="photoURL"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="my-btn w-full cursor-pointer">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
