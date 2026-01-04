import React from "react";
import MyContainer from "../../MyContainer/MyContainer";

const CategoriesSection = () => {
  const categories = [
    "Frontend Development",
    "Backend Development",
    "Data Science",
    "AI & Machine Learning",
    "UI/UX Design",
    "Mobile Development",
  ];

  return (
    <section className="lg:py-22 py-16 dark:bg-[#212224]">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 cursor-pointer transition"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default CategoriesSection;
