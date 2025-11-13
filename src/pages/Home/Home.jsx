import React from 'react';
import Banner from '../../components/Banner/Banner';
import WhyChooseUs from '../../components/whyChoodeUs/WhyChooseUs';
import PopularCourse from '../../components/PopularCourse/PopularCourse';

const Home = () => {
  return (
    <div>
      <title>SkilledHub || Home</title>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;