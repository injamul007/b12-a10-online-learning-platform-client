import React from "react";
import MyContainer from "../../MyContainer/MyContainer";

const FeaturesSection = () => {
  const features = [
    { title: "Live Classes", desc: "Interact with instructors in real-time." },
    { title: "Certificates", desc: "Get recognized for your learning." },
    { title: "Flexible Learning", desc: "Learn at your own pace." },
    { title: "Interactive Quizzes", desc: "Test your skills with quizzes." },
  ];

  return (
    <section className="lg:py-22 py-16">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-gray-200 dark:bg-[#212224] shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default FeaturesSection;
