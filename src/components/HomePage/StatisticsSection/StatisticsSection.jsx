import React from "react";
import MyContainer from "../../MyContainer/MyContainer";

const StatisticsSection = () => {
  const stats = [
    { number: "5000+", label: "Students" },
    { number: "50+", label: "Courses" },
    { number: "100%", label: "Satisfaction" },
    { number: "30+", label: "Top Instructors" },
  ];

  return (
    <section className="lg:py-22 py-16">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 dark:bg-[#212224]">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-primary">
                  {s.number}
                </span>
                <span className="text-gray-600 mt-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default StatisticsSection;
