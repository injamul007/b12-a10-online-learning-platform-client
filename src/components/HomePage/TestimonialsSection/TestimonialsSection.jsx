import React from "react";
import MyContainer from "../../MyContainer/MyContainer";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      message: "SkilledHub helped me land my first job in tech!",
    },
    {
      name: "Rahim Ahmed",
      role: "Data Analyst",
      message: "Great platform with amazing instructors and support.",
    },
    {
      name: "Sara Khan",
      role: "UI/UX Designer",
      message: "The courses are practical and easy to follow.",
    },
  ];

  return (
    <section className="lg:py-22 py-16">
      <MyContainer>
        <div className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-[#212224] p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">"{t.message}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
      </MyContainer>
    </section>
  );
};

export default TestimonialsSection;
