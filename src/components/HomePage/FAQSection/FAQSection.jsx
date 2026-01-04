import React, { useState } from "react";
import MyContainer from "../../MyContainer/MyContainer";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Click on 'Enroll Now' button and follow instructions.",
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, all completed courses have certificates.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely, all courses are flexible.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="lg:py-22 py-16">
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-left">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 cursor-pointer dark:bg-[#212224]"
                onClick={() => setActive(active === idx ? null : idx)}
              >
                <h3 className="font-semibold">{f.question}</h3>
                {active === idx && (
                  <p className="text-gray-500 mt-2">{f.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default FAQSection;
