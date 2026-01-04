import React from "react";
import MyContainer from "../../MyContainer/MyContainer";

const BlogSection = () => {
  const blogs = [
    { title: "5 Tips to Learn React Fast", date: "Jan 3, 2026" },
    { title: "Why Full Stack Development is in Demand", date: "Dec 20, 2025" },
    { title: "UI/UX Mistakes to Avoid", date: "Nov 15, 2025" },
  ];

  return (
    <section className="lg:py-22 py-16">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-[#212224] shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.date}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default BlogSection;
